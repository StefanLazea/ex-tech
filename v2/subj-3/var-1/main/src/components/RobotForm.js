import React, { Component } from 'react'

class RobotForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            type: '',
            mass: ''
        }

    }

    onHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
            <input type="text" name="name" id="name" onChange={e=> this.onHandle(e)}/>
            <input type="text" name="type" id="type" onChange={e=> this.onHandle(e)}/>
            <input type="text" name="mass" id="mass" onChange={e=> this.onHandle(e)}/>
            <button value="add" onClick={()=>
            this.props.onAdd({
                name: this.state.name,
                type: this.state.type,
                mass: this.state.mass
            }
            )}
            ></button>
			</div>
        )
    }
}

export default RobotForm;
