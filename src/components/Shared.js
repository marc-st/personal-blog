import React from 'react'
import '../stylesheets/headfoot.css'
import Navigation from './Navigation'

export const Header = () => (
	<header className="header">
		<div className="profileImageWrap">
			<div className="profileImage" />
		</div>
		<h1 className="App-title">Marc Stevens</h1>
		<Navigation />
	</header>
)
