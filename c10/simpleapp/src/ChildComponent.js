import React from 'react';
import {Component} from 'react';

class ChildComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter : 0
    }

    this.increase = () => {
      this.setState({
        counter : this.state.counter + 1
      })
    }
  }
  render(){
    return <div>
      <div>
        Hello world. I have {this.props.somestringprop} and {this.props.somevarprop}
      </div>
      <div>
        My counter is {this.state.counter}
      </div>
      <div>
        <input type="button" value="click me!" onClick={this.increase} />
      </div>
    </div>
  }
}

export default ChildComponent;
