import React, { Component } from 'react'

class Company extends Component {
  constructor(props) {
    super(props)
    let { item } = this.props;
    this.state = {
      isEditing: false,
      name: item.name,
      employees: item.employees,
      revenue: item.revenue,
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  save = (event) => {
    let company = {
      name: this.state.name,
      employees: this.state.employees,
      revenue: this.state.revenue
    };
    this.props.onSave(this.props.item.id, company);
    this.setState({ isEditing: false })
  }

  render() {
    let { item } = this.props
    if (this.state.isEditing) {
      return <div>
				<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
				<input type="text" id="employees" name="employees" onChange={this.handleChange} value={this.state.employees} />
				<input type="text" id="revenue" name="revenue" onChange={this.handleChange} value={this.state.revenue} />
				<input type="button" value="save" onClick={this.save} />
				<input type="button" value="cancel" onClick={() => this.setState({
					isEditing: false
				})} />
			</div>
    }
    else {
      return (
        <div>
          Name {item.name} with {item.employees} employees {item.revenue} revenue
          <input type="button" value="edit" onClick={() => this.setState({
						isEditing: true
					})} />        
        </div>
      )
    }
  }

}

export default Company
