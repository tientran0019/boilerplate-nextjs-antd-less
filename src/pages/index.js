/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-19 00:26:25
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'src/components/Head';

import Home from 'src/containers/Home';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const HomePage = (props) => {
	// const { } = props;

	return (
		<>
			<Head />
			<Home />
		</>
	);
};

HomePage.propTypes = propTypes;

HomePage.defaultProps = defaultProps;

export default HomePage;
