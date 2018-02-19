import React, { Component } from 'react'
import '../stylesheets/content.css'
import { Route } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'

import { Home } from './Home'
import { Posts } from './Posts'

function bounce(val) {
	return spring(val, {
		stiffness: 330,
		damping: 22
	})
}

const pageTransitions = {
	atEnter: {
		opacity: 0,
		scale: 1.2
	},
	atLeave: {
		opacity: bounce(0),
		scale: bounce(0.8)
	},
	atActive: {
		opacity: bounce(1),
		scale: bounce(1)
	}
}

class Content extends Component {
	render() {
		return (
			<div className="mainPosts">
				<AnimatedSwitch
					className="switchRule"
					{...pageTransitions}
					mapStyles={styles => ({
						opacity: styles.opacity,
						transform: `scale(${styles.scale})`
					})}
				>
					<Route path="/about" component={Home} />
					<Route path="/posts" component={Posts} />
				</AnimatedSwitch>
			</div>
		)
	}
}
export default Content
