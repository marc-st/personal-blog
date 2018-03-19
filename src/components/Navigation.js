import React, { Component } from "react"
import "../stylesheets/navigation.css"
import { Link } from "react-router-dom"

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<Link to="/posts">
					<img src={require("../images/blog.svg")} alt="Blog" className="navIcon"/>
				</Link>
			</div>
		)
	}
}
export default Navigation
