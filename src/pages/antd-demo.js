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

import AntDemo from 'src/containers/AntDemo';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const AntDemoPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Antd Demo" />
			<AntDemo />
		</>
	);
};

AntDemoPage.propTypes = propTypes;

AntDemoPage.defaultProps = defaultProps;

export default AntDemoPage;
