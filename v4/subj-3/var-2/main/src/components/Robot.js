import React, { Component } from 'react'

// TODO : adăugați posibilitatea de a edita un robot 
// editarea se face prin intermediul unui robot cu 2 stări, una de vizualizare și una de editare

// TODO : add the posibility to edit a robot 
// editing is done via 2 states a view state and an edit state

class Robot extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false,
			name: this.props.item.name,
			type: this.props.item.type,
			mass: this.props.item.mass
		}
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	save = (event) => {
		let robot = {
			name: this.state.name,
			type: this.state.type,
			mass: this.state.mass
		};
		this.props.onSave(this.props.item.id, robot);
		this.setState({ isEditing: false })
	}
	render() {
		let { item } = this.props

		if (!this.state.isEditing) {
			return (
				<div>
					Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
					<input type="button" value="edit" onClick={() => this.setState({
						isEditing: true
					})} />
				</div>
			)
		} else {
			return <div>
				<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
				<input type="text" id="type" name="type" onChange={this.handleChange} value={this.state.type} />
				<input type="text" id="mass" name="mass" onChange={this.handleChange} value={this.state.mass} />
				<input type="button" value="save" onClick={this.save} />
				<input type="button" value="cancel" onClick={() => this.setState({
					isEditing: false
				})} />
			</div>
		}
	}
}

export default Robot
