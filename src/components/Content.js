import React, { Component } from 'react'
import '../stylesheets/content.css'
import { Switch, Route } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'

import { Home } from './Home'
import { Posts } from './Posts'

function glide(val) {
	return spring(val, {
		stiffness: 174,
		damping: 24
	})
}

const pageTransitions = {
	atEnter: {
		opacity: 0,
		offset: 100
	},
	atLeave: {
		opacity: glide(0),
		offset: glide(-100)
	},
	atActive: {
		opacity: glide(1),
		offset: glide(0)
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
						transform: `translateX(${styles.offset}%)`
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
