import { Router, Request, Response } from 'express'

const routes = Router()

interface User {
	id: string
	name: string
	email: string
}

const users: User[] = []

routes.get('/users', (request: Request, response: Response) => {
	return response.json(users)
})

routes.post('/users', (request: Request, response: Response) => {
	const { name, email } = request.body

	const user = { id: '', name }
})

export default routes
