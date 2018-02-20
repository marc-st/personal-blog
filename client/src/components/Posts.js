import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Post from './Post'
import bloglist from '../bloglist'

import '../stylesheets/posts.css'

const ListItem = props => (
	<li className="postLink">
		<Link to={props.match.url + props.review.url}>{props.review.name}</Link>
	</li>
)
class List extends Component {
	render() {
		return (
			<ul className="postLinks">
				<h2> blog posts: </h2>
				{Object.values(bloglist).map((review, i) => <ListItem review={review} key={i} match={this.props.match} />)}
			</ul>
		)
	}
}

const Blog = props => (
	<div className="blog-posts">
		{Object.values(bloglist).map((review, i) => (
			<Route
				path={props.match.path + review.url}
				render={() => <Post filename={review.filename} match={props.match.path + review.url} />}
			/>
		))}
	</div>
)

export const Posts = ({ match }) => (
	<React.Fragment>
		<List match={match} />
		<hr />
		<Blog match={match} />
	</React.Fragment>
)
