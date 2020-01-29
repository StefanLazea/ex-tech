import React from 'react';

import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddVacation from './AddVacation';
import VacationList from './VacationList';

configure({adapter: new Adapter() });

const FIRST_INPUT = 'vacation-destination';
const SECOND_INPUT = 'vacation-location-type';
const THIRD_INPUT = 'vacation-price';

const BUTTON_VALUE = 'add vacation';

const FIRST_COMPONENT = <AddVacation />;
const FIRST_CLASS = AddVacation;

const SECOND_CLASS = VacationList;
const SECOND_COMPONENT = <VacationList />;

const PROP_NAME = "itemAdded"


it('AddVacation component should be rendered', () => {
    const component = mount(SECOND_COMPONENT);
    expect(component.find(FIRST_CLASS).length).toEqual(1);
})

it('AddVacation component should contain 3 inputs. Please check input ids.', () => {
    const component = mount(FIRST_COMPONENT);
    const firstInput = component.find(`#${FIRST_INPUT}`).first();
    const secondInput = component.find(`#${SECOND_INPUT}`).first();
    const thirdInput = component.find(`#${THIRD_INPUT}`).first();

    expect(firstInput.length + secondInput.length + thirdInput.length).toEqual(3);
})

it ('AddVacation component should contain a button to trigger AddVacation method', () => {
    const component = mount(FIRST_COMPONENT);
    let button = component.find(`[value="${BUTTON_VALUE}"]`).first();
    expect(button.length).toEqual(1);
})

it ('AddVacation component should contain props taskAdded', () => {
    const component = mount(SECOND_COMPONENT);
    let addForm = component.find(FIRST_CLASS).first();
    expect(typeof addForm.props()[PROP_NAME]).toEqual('function');
})

it ('The added item should be validated', () => {
    const component = mount(SECOND_COMPONENT);
    let firstInput = component.find(`#${FIRST_INPUT}`).first();
    firstInput.simulate('focus');
    firstInput.simulate('change', {target: {name: `${FIRST_INPUT}`, value: 'Test'}});

    let secondInput = component.find(`#${SECOND_INPUT}`).first();
    secondInput.simulate('focus');
    secondInput.simulate('change', {target: {name: `${SECOND_INPUT}`, value: 'Test'}});


    let thirdInput = component.find(`#${THIRD_INPUT}`).first();
    thirdInput.simulate('focus');
    thirdInput.simulate('change', {target: {name: `${THIRD_INPUT}`, value: 100 }});

    let addBtn = component.find(`[value="${BUTTON_VALUE}"]`).first();
    addBtn.simulate('click');
    expect(component.state().data.length).toEqual(1);
})