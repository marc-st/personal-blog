import React, { Component } from 'react'
import marked from 'marked'

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = { markdown: '' }
	}

	componentWillMount() {
		const readmePath = require('../markdown/' + this.props.filename + '.md')
		fetch(readmePath)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					markdown: marked(text)
				})
			})
	}
	componentDidUpdate() {
		//window.scrollTo(0, 600)
	}
	render() {
		return (
			<section>
				<article dangerouslySetInnerHTML={{ __html: this.state.markdown }} />
			</section>
		)
	}
}
export default Post
