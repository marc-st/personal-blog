const ReactDOMServer = require('react-dom/server')
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.port || 5000
const butter = require('buttercms')('725982dd1144300a0f449823571b00760d73eb40')

// server built files with static files middleware
app.use('/build', express.static(path.join(__dirname, 'build')))
// '/blog' just a dummy route
app.get('/posts/:url', renderBlog)

// call ButterCMS API to retrieve blog post
function renderBlog(req, res) {
	var url = req.params.url

	butter.post.retrieve(url).then(function(resp) {
		// TODO somehow capture this response and pass as
		// props into Post.js
		fs.readFile('./client/public/index.html', 'utf-8', function(err, data) {
			if (err) throw err
			const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${resp.data.data.body}</div>`)
			res.send(document)
		})
	})
	.catch(function(resp) {
		console.log(resp)
	})
}

app.listen(port, () => console.log('Listening...'))
