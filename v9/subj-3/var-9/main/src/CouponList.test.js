import React from 'react';


import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CouponList } from './CouponList';
import { AddCoupon } from './AddCoupon';

configure({ adapter: new Adapter() });

it ('AddCoupon component should be rendered', () => {
    const component = mount(<CouponList />);
    expect(component.find(AddCoupon).length).toEqual(1);
})

it('AddCoupon should contain 3 inputs of type text', () => {
    const component = mount(<AddCoupon />);
    const categoryInput = component.find('#category').first();
    const discountInput = component.find('#discount').first();
    const availabilityInput = component.find('#availability').first();
    expect(categoryInput.length + discountInput.length + availabilityInput.length).toEqual(3);
})

it('AddCoupon should contain a button to trigger addCoupon method', () => {
    const component = mount(<AddCoupon />);
    let button = component.find('[value="add coupon"]').first();
    expect(button.length).toEqual(1);
})

it ('AddCoupon should contain props onAdd', () => {
    const component = mount(<CouponList />);
    let addForm = component.find(AddCoupon).first();
    expect(typeof addForm.props().onAdd).toEqual('function');
})

it ('The added coupon should be validated', () => {
    const component = mount(<CouponList />);
    let categoryInput = component.find('#category').first();
    nameInput.simulate('focus');
    nameInput.simulate('change', {
        target: {
             name: 'category',
             value: 'Food'
            }
        });

    let discountInput = component.find('#discount').first();
    discountInput.simulate('focus');
    discountInput.simulate('change', {
        target: {
            name: 'discount',
            value: '10'
        }
    });

    let availabilityInput = component.find('#availability').first()
    availabilityInput.simulate('focus');
    availabilityInput.simulate('change', {
        target: {
            name: 'availability',
            value: '5'
        }
    });

    let addBtn = component.find('[value="add coupon"]').first()
    addBtn.simulate('click');
    expect(component.state().coupons.length).toEqual(1);
})