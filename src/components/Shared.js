import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

import '../stylesheets/headfoot.css'

export const Header = () => (
	<header className="header">
		<Link to="/" className="App-title">
			<h1>Marc Stevens</h1>
		</Link>
		<Navigation />
	</header>
)
