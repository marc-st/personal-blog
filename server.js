const express = require('express')
const app = express()
const port = process.env.port || 5000

var butter = require('buttercms')('725982dd1144300a0f449823571b00760d73eb40')

// '/blog' just a dummy route
app.get('/blog', renderBlog)

// call ButterCMS API to retrieve blog post
function renderBlog(req, res) {
	var page = req.params.page || 1

	butter.post.list({ page_size: 10, page: page }).then(function(resp) {
		// TODO somehow capture this response and pass as
		// props into Post.js
		res.render('index', {
			posts: resp.data.data,
			next_page: resp.data.meta.next_page,
			previous_page: resp.data.meta.previous_page
		})
	})
}

app.listen(port, () => console.log('Listening...'))
