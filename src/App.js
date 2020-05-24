import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

export default class App {
  constructor() {
    this.app = express()

    this.middlewares()
  }

  get _app() {
    return this.app
  }

  middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
  }
}
