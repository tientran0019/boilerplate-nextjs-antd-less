/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:51:30
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'next/head';

import { html } from '../../README.md';

const Index = (props) => {
	// const { } = props;

	return (
		<div className="">
			<Head>
				<title>Boilerplate</title>
			</Head>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

Index.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Index.defaultProps = {
	// classes: {},
};

export default Index;
