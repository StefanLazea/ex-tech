import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotDetails from './RobotDetails'

// TODO : adăugați posibilitatea de a vizualiza detaliile unui robot
// RobotList are 2 stări una de detalii și una de listă
// se poate trece în starea de detalii printr-un buton pe fiecare robot
// se poate trece înapoi la listă printr-un buton de anulare

// TODO : add the posibility to view a robot's details
// RobotList has 2 states, one for details for a robot and one for the full list of robots
// passing to the details state is done with a button on each robot
// returning tothe list is done with a cancel button

class RobotList extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			showDetails: false,
			onCancel: true,
			item: null
		}

	}
	componentDidMount() {
		this.store = new RobotStore()
		this.setState({
			robots: this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots: this.store.getRobots(),
			})
		})
	}

	handleDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails,
			onCancel: false
		});
	}
	handleCancel = () => {
		this.setState({
			showDetails: false,
			onCancel: true
		});
	}


	render() {
		return (
			<div>
			<button value="cancel" onClick={this.handleCancel}></button>

			{ 
			this.state.onCancel === true ?
				this.state.robots.map((e, i) => 
					<div key={i}>
						<Robot item={e} key={i} />
						<button value="select" onClick={this.handleDetails}></button>
					</div>
				)
			: null
			}
		
		</div>
		)
	}
}

export default RobotList
