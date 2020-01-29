import React from 'react';
import ReactDOM from 'react-dom';


import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StudentList } from './StudentList';
import { AddStudent } from './AddStudent';

configure({ adapter: new Adapter() });

it ('AddStudent component should be rendered', () => {
    const component = mount(<StudentList />);
    expect(component.find(AddStudent).length).toEqual(1);
})

it('AddStudent should contain 3 inputs of type text', () => {
    const component = mount(<AddStudent />);
    const nameInput = component.find('#name').first();
    const surnameInput = component.find('#surname').first();
    const ageInput = component.find('#age').first();
    expect(nameInput.length + surnameInput.length + ageInput.length).toEqual(3);
})

it('AddStudent should contain a button to trigger addStudent method', () => {
    const component = mount(<AddStudent />);
    let button = component.find('[value="add student"]').first();
    expect(button.length).toEqual(1);
})

it ('AddStudent should contain props onAdd', () => {
    const component = mount(<StudentList />);
    let addForm = component.find(AddStudent).first();
    expect(typeof addForm.props().onAdd).toEqual('function');
})

it ('The added student should be validated', () => {
    const component = mount(<StudentList />);
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

    let ageInput = component.find('#age').first()
    ageInput.simulate('focus');
    ageInput.simulate('change', {
        target: {
            name: 'age',
            value: '20'
        }
    });

    let addBtn = component.find('[value="add student"]').first()
    addBtn.simulate('click');
    expect(component.state().students.length).toEqual(1);
})