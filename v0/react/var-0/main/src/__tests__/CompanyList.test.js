import React from 'react'
import ReactDOM from 'react-dom'
import CompanyList from '../components/CompanyList'
import Company from '../components/Company'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it ('renders a list of companies', () => {
	const component = shallow(<CompanyList />)
	expect(component.find(Company).length).toEqual(2)	
})

it ('valid props on company', () => {
	const component = mount(<CompanyList />)
	let first = component.find(Company).first()
	expect(first.props().item).toEqual({"id": 1, "name": "acme inc", "employees": 100, "revenue": 1000})
	expect(typeof first.props().onDelete).toEqual('function')
})

it ('delete a company', () => {
	const component = mount(<CompanyList />)
	let first = component.find(Company).first()
	let button = first.find('[value="delete"]').first()
	button.simulate('click')
	expect(component.find(Company).length).toEqual(1)	
})

