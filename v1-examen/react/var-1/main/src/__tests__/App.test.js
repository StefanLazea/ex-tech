import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import CompanyList from '../components/CompanyList'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
