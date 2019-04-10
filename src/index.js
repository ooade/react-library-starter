import Proptypes from 'prop-types';
import React from 'react';

const CustomButton = ({ children, onClick }) => {
	return (
		<button className="custom-button" type="button" onClick={onClick}>
			{children}
		</button>
	);
};

CustomButton.defaultProps = {
	children: String
};

CustomButton.propTypes = {
	/**
	 * Children could be:
	 * Proptypes.oneOfType([Proptypes.arrayOf(Proptypes.node), Proptypes.node])
	 * Here we're just taking in a string
	 */
	children: Proptypes.string,
	onClick: Proptypes.func
};

export default CustomButton;
