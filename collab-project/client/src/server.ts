import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

app.get('/api/**', async (req, res) => {
  const path = req.path.replace(/^\/api\//, '');
  try {
    const rep = await fetch(`http://localhost:8080/${path}`)
    if (rep.ok) {
      if (rep.headers.get('Content-Type')?.includes('application/json')) {
        res.json(await rep.json())
      } else if (rep.headers.get('Content-Type')?.includes('text/html')) {
        res.send(await rep.text())
      } else if (rep.headers.get('Content-Type')?.includes('blob')) {
        res.send(await rep.blob())
      } else if (rep.headers.get('Content-Type')?.includes('text/plain')) {
        res.send(await rep.text())
      } else {
        res.send(await rep.text())
      }
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
