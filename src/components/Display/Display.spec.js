import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Display displayValue={''}/>));
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
    it ('renders the value of displayValue', () => {
        wrapper.setProps({ displayValue: 'test' });
        expect(wrapper.text()).toEqual('test');
    });
});