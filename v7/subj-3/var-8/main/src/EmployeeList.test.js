import React from 'react';
import ReactDOM from 'react-dom';


import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { EmployeeList } from './EmployeeList';
import { AddEmployee } from './AddEmployee';

configure({ adapter: new Adapter() });

it ('AddEmployee component should be rendered', () => {
    const component = mount(<EmployeeList />);
    expect(component.find(AddEmployee).length).toEqual(1);
})

it('AddEmployee should contain 3 inputs of type text', () => {
    const component = mount(<AddEmployee />);
    const nameInput = component.find('#name').first();
    const surnameInput = component.find('#surname').first();
    const experienceInput = component.find('#experience').first();
    expect(nameInput.length + surnameInput.length + experienceInput.length).toEqual(3);
})

it('AddEmployee should contain a button to trigger addEmployee method', () => {
    const component = mount(<AddEmployee />);
    let button = component.find('[value="add employee"]').first();
    expect(button.length).toEqual(1);
})

it ('AddEmployee should contain props onAdd', () => {
    const component = mount(<EmployeeList />);
    let addForm = component.find(AddEmployee).first();
    expect(typeof addForm.props().onAdd).toEqual('function');
})

it ('The added employee should be validated', () => {
    const component = mount(<EmployeeList />);
    let nameInput = component.find('#name').first();
    nameInput.simulate('focus');
    nameInput.simulate('change', {
        target: {
             name: 'name',
             value: 'Gigescu'
            }
        });

    let surnameInput = component.find('#surname').first();
    surnameInput.simulate('focus');
    surnameInput.simulate('change', {
        target: {
            name: 'surname',
            value: 'Popel'
        }
    });

    let experienceInput = component.find('#experience').first()
    experienceInput.simulate('focus');
    experienceInput.simulate('change', {
        target: {
            name: 'experience',
            value: '5'
        }
    });

    let addBtn = component.find('[value="add employee"]').first()
    addBtn.simulate('click');
    expect(component.state().employees.length).toEqual(1);
})