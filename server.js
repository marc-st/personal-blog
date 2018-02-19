const express = require('express')

const app = express()
const port = process.env.port || 5000

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello from express' })
})

app.listen(port, () => console.log('Listening...'))
