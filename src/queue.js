import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '..', '.env') })

import Queue from './app/lib/Queue'

Queue.process()
