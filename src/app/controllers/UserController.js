class UserController {
	async store(req, res) {
		const { name, email, password } = req.body

		const user = {
			name,
			email,
			password,
		}

		return res.status(201).json(user)
	}
}

export default new UserController()
