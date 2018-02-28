import React from 'react'
import '../stylesheets/home.css'
import { Link } from "react-router-dom"

export const Home = () => (
	<div className="home">
		<div className="links">
			<ul>
				<li><a href="https://github.com/marc-st">github</a></li>
				<li>resume</li>
				<li><a href="https://twitter.com/marcsstevens">twitter</a></li>
			</ul>
		</div>
		<div className="profileImageWrap">
			<div className="profileImage" />
		</div>
	</div>
)
