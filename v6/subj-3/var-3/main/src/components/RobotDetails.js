import React, { Component } from 'react'

class RobotDetails extends Component {
    render() {
        let { item } = this.props
        return (
            <div>
                Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
      			<button value="cancel" onClick={this.props.onSelect}>Click me</button>
            </div>

        )
    }
}

export default RobotDetails
