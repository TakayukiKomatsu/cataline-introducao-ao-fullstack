import express from 'express'

const app = express()

app.listen('3333', () => {
	console.log('The server was started on port 3333')
})
