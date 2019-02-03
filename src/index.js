import Proptypes from 'prop-types';
import React from 'react';

const CustomButton = ({ children }) => (
	<button className="custom-button" type="button">
		{children}
	</button>
);

CustomButton.defaultProps = {
	children: String
};

CustomButton.propTypes = {
	/**
	 * Children could be:
	 * Proptypes.oneOfType([Proptypes.arrayOf(Proptypes.node), Proptypes.node])
	 * Here we're just taking in a string
	 */
	children: Proptypes.string
};

export default CustomButton;
