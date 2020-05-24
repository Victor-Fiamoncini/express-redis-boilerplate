import Queue from '../lib/Queue'

class UserController {
	async store(req, res) {
		const { name, email, password } = req.body

		const user = {
			name,
			email,
			password,
		}

		await Queue.add('RegistrationMail', { user })

		return res.status(201).json(user)
	}
}

export default new UserController()
