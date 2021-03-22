/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:51:30
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Index from 'src/containers/Index/';

import Head from 'src/components/Head';

const IndexPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head />
			<Index />
		</>
	);
};

IndexPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

IndexPage.defaultProps = {
	// classes: {},
};

// IndexPage.getInitialProps = ({ store, isServer, pathname, query }) => {
// 	// store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
// 	return { custom: 'custom' }; // You can pass some custom props to the component from here
// };

export default IndexPage;
// export default connect((state) => state)(IndexPage);
