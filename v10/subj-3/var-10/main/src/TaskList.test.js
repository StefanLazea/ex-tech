import React from 'react';

import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddTask from './AddTask';
import TaskList from './TaskList';

configure({adapter: new Adapter() });

const FIRST_INPUT = 'task-name';
const SECOND_INPUT = 'task-priority';
const THIRD_INPUT = 'task-duration';

const BUTTON_VALUE = 'add task';

const FIRST_COMPONENT = <AddTask />;
const FIRST_CLASS = AddTask;

const SECOND_CLASS = TaskList;
const SECOND_COMPONENT = <TaskList />;

const PROP_NAME = "taskAdded"


it('AddTask component should be rendered', () => {
    const component = mount(SECOND_COMPONENT);
    expect(component.find(FIRST_CLASS).length).toEqual(1);
})

it('AddTask component should contain 3 inputs. Please check input ids.', () => {
    const component = mount(FIRST_COMPONENT);
    const firstInput = component.find(`#${FIRST_INPUT}`).first();
    const secondInput = component.find(`#${SECOND_INPUT}`).first();
    const thirdInput = component.find(`#${THIRD_INPUT}`).first();

    expect(firstInput.length + secondInput.length + thirdInput.length).toEqual(3);
})

it ('AddTask component should contain a button to trigger addTask method', () => {
    const component = mount(FIRST_COMPONENT);
    let button = component.find(`[value="${BUTTON_VALUE}"]`).first();
    expect(button.length).toEqual(1);
})

it ('AddTask component should contain props taskAdded', () => {
    const component = mount(SECOND_COMPONENT);
    let addForm = component.find(FIRST_CLASS).first();
    expect(typeof addForm.props()[PROP_NAME]).toEqual('function');
})

it ('The added task should be validated', () => {
    const component = mount(SECOND_COMPONENT);
    let firstInput = component.find(`#${FIRST_INPUT}`).first();
    firstInput.simulate('focus');
    firstInput.simulate('change', {target: {name: `${FIRST_INPUT}`, value: 'Test'}});

    let secondInput = component.find(`#${SECOND_INPUT}`).first();
    secondInput.simulate('focus');
    secondInput.simulate('change', {target: {name: `${SECOND_INPUT}`, value: 'medium'}});


    let thirdInput = component.find(`#${THIRD_INPUT}`).first();
    thirdInput.simulate('focus');
    thirdInput.simulate('change', {target: {name: `${THIRD_INPUT}`, value: 10 }});

    let addBtn = component.find(`[value="${BUTTON_VALUE}"]`).first();
    addBtn.simulate('click');
    expect(component.state().data.length).toEqual(1);
})