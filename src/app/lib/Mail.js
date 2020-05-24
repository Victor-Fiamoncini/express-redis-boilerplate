import { createTransport } from 'nodemailer'
import mailConfig from '../config/mail'

export default createTransport(mailConfig)
