import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import CustomButton from '../src';

describe('Library', () => {
	afterEach(cleanup);

	it('should render properly', () => {
		const { getByText } = render(<CustomButton>Hello World</CustomButton>);
		expect(getByText(/Hello World/i)).toBeTruthy();
	});

	it('should button should be clickable when passed an onClick handler', () => {
		const fakeHandleClick = jest.fn();
		const { getByText } = render(
			<CustomButton onClick={fakeHandleClick}>Hello World</CustomButton>
		);

		fireEvent.click(getByText(/Hello World/i));
		expect(fakeHandleClick).toBeCalledTimes(1);
	});
});
