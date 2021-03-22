/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:51:30
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

// import classes from './style.less';

import { html } from '../../../README.md';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Index = (props) => {
	// const { } = props;

	return (
		<div className="container py-5">
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
