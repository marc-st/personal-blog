import React, { Component } from 'react'
import '../stylesheets/App.css'

import { Header } from './Shared'
import Content from './Content'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="main-content">
					<Content />
				</div>
			</React.Fragment>
		)
	}
}

export default App
