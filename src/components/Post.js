import React, { Component } from 'react'
import marked from 'marked'
import ReactDisqusComments from 'react-disqus-comments'

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = { markdown: '' }
	}

	handleNewComment(comment) {
		console.log(comment.text)
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
				<article dangerouslySetInnerHTML={{ __html: this.state.markdown }}
					style={{paddingBottom: 30}}/>
				<ReactDisqusComments
					shortname="marcst-com"
					identifier={this.props.filename}
					url={'https://marcst.com/#/' + this.props.match}
					title={this.props.filename}
					onNewComment={this.handleNewComment}
				/>
			</section>
		)
	}
}
export default Post
