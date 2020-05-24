import Bull from 'bull'
import redisConfig from '../config/redis'
import RegistrationMail from '../jobs/RegistrationMail'

const mailQueue = new Bull(RegistrationMail.key, redisConfig)

export default mailQueue
