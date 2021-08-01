import { Router, Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

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

	const user = { id: uuid(), name, email }

	users.push(user)
	return response.json(user).status(201)
})

routes.put('/users/:id', (request: Request, response: Response) => {
	const { id } = request.params
	const { name, email } = request.body

	const userIndex = users.findIndex((user) => user.id === id)

	if (userIndex < 0) {
		return response.status(404).json({
			error: 'User not found',
		})
	}

	const user = { id, name, email }
	users[userIndex] = user
	return response.json(user)
})

routes.delete('/users/:id', (request: Request, response: Response) => {
	const { id } = request.params
	const { name, email } = request.body

	const userIndex = users.findIndex((user) => user.id === id)

	if (userIndex < 0) {
		return response.status(404).json({
			error: 'User not found',
		})
	}

	users.splice(userIndex, 1)

	return response.status(204).send()
})

export default routes
