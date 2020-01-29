import React from 'react';
import {withRouter} from 'react-router-dom'

class Item extends React.Component{
  render(){
    let {match} = this.props
    let {params} = match
  return <div>item is {params.item}</div>
  }
}

export default withRouter(Item)
