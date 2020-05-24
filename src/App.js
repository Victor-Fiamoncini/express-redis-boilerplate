import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import BullBoard from 'bull-board'

import routes from './routes'
import Queue from './app/lib/Queue'

export default class App {
	constructor() {
		this.app = express()

		this.middlewares()
		this.queues()
	}

	get _app() {
		return this.app
	}

	middlewares() {
		this.app.use(express.json())
		this.app.use(morgan('dev'))
		this.app.use(cors())
		this.app.use(routes)
		this.app.use('/admin', BullBoard.UI)
	}

	queues() {
		BullBoard.setQueues(Queue.queues.map((queue) => queue.bull))
	}
}
