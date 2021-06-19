/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-01-13 22:57:59
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Image from 'next/image';

const propTypes = {
	// className: PropTypes.string,
};

const defaultProps = {
	// className: {},
};

const Logo = (props) => {
	const { ...attrs } = props;

	return (
		<Image
			width={120}
			height={120}
			{...attrs}
			src="/images/logo.png"
			alt="Logo"
		/>
	);
};

Logo.propTypes = propTypes;

Logo.defaultProps = defaultProps;

export default Logo;
