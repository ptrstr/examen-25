# Collaborative Project

This competition relies on contribution some features to an existing project.

The project contains a simple frontend (angular) and backend. The frontend is a simple Angular app that displays a list of legos. The backend is a simple Node.js app that serves the frontend and provides an API to get the list of legos.

The current Project has been tested with Node 21.7.1, but any Node version > 22 should also be fine

# Your tasks (Not really optionnal)

1. Add the database schema to the project (The .ts file(s) must be in a commons folder so both the frontend and backend share the same files)
- Lego ("represents a brick")
  - id: int # Unique identifier
  - name: string 
  - color: string # Must be a valid color name (#FF0000, #00FF00, #0000FF, etc.)
  - size: string # Small, Medium, Large
  - price: float # Positive number
  - quantity: int # Positive number
  - image: blob # If you use SQL, you can store a URL or path to the image # Optional
  - sets: [string] # Must be a valid set name

- Sets ("such as the Harry Potter )
  - id: int # Unique identifier
  - name: string 
  - year: int # Year of release (ISO 8601)
  - theme: string

2. Add the database connection to the backend
- You can use either PostgreSQL or MongoDB, but both must be hosted locally and the settings clearly documented in the project

3. Add the API to get the list of legos from the database
4. Add the API to add a lego to the database (image optional...)

# Bonus - Adds points
1. Create a Dockerfile to run the project in a container, with the database hosted in the same container
2. Add the API to get the list of sets from the database
3. Add the API to add a set to the database
4. Create the option to buy specific lego pieces (can be one by one, if you want to spend more time, a cart etc.) and the API needed
5. Add prettier/eslint to the client
6. Add the ability to add an image to the database

# Criterias

- Usability : Can someone else use your features or extend them easily
- UI/UX : Is the frontend comprehensible
- Completion of the tasks

# Help

Commands that can be useful
```bash
npm install -g @angular/cli
```
```bash
nvm install 22
```
```bash
cd src/app/...
ng generate component [NOM]
```
```bash
npm ci # OU npm i
npm start
npm run lint
npm run pretty
```