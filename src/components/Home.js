import React from 'react'
import '../stylesheets/home.css'

export const Home = () => (
	<div className="home">
		<article className="profileDesc">
			<h2 style={{ marginTop: 0 }}>I'm Marc and I'm interested in hacking things together on the internet.</h2>
			<p>
				I'm currently studying Computer Science at the
				<a href="https://surrey.ac.uk" stlye={{ paddingRight: 0 }}>
					{' '}
					University of Surrey
				</a>.<br />
				I will primarily use this website for blog posts on subjects I'm passionate about.
				<br />I will also use this to keep track of programming projects I'm working on.
			</p>
		</article>
		<hr />
		<ul className="mediaLinks">
			<li className="mediaLink">
				<a href="https://twitter.com/marcsstevens">twitter</a>
			</li>
			<li className="mediaLink">
				<a href="https://www.linkedin.com/in/marc-stevens-292820144/">linkedIn</a>
			</li>
			<li className="mediaLink">
				<a href="https://github.com/marc-st">github</a>
			</li>
		</ul>
	</div>
)
