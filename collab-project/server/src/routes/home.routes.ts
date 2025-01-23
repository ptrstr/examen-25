import { Router } from 'express'
import { HomeController } from '../controllers/home.controller'

class HomeRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', (req, res) => {
      HomeController.welcome(req, res)
      return
    })
  }
}

export default new HomeRoutes().router
