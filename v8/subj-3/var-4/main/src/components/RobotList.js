import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'

// TODO: adăugați posibilitatea de a filtra roboții după name și type
// filtrarea se face pe baza a 2 text input-uri și se produce la fiecare tastă apăsată

// TODO: add the possiblity to filter robots according to name and type
// filtering is done via 2 text inputs and happens whenever a key is pressed

class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : [],
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}
	render() {
		return (
			<div>
				{
					robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
