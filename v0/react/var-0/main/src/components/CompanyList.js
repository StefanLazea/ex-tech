import React, { Component } from 'react'
import CompanyStore from '../stores/CompanyStore'

class CompanyList extends Component {
	constructor(){
		super()
		this.state = {
			companies : []
		}
	}
	componentDidMount(){
		this.store = new CompanyStore()
		this.setState({
			companies : this.store.getAll()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				companies : this.store.getAll()
			})			
		})
	}
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default CompanyList
