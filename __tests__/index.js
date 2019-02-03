import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomButton from '../src';

configure({ adapter: new Adapter() });

describe('Library', () => {
	it('should render properly', () => {
		const wrapper = shallow(<CustomButton>Hello World</CustomButton>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should match the element specified', () => {
		const actual = shallow(<CustomButton>Hello World</CustomButton>);
		const expected = (
			<button className="custom-button" type="button">
				Hello World
			</button>
		);
		expect(actual).toMatchElement(expected);
	});

	it('[Not necessary, just an example] should have className custom-button', () => {
		const wrapper = mount(<CustomButton>Hello World</CustomButton>);
		const shallowWrapper = shallow(<CustomButton>Hello World</CustomButton>);

		// mount?
		expect(wrapper.find('button')).toHaveClassName('custom-button');

		// or a simple shallow???
		expect(shallowWrapper).toHaveClassName('custom-button');
	});
});
