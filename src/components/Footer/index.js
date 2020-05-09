/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:08:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import classes from './style.less';

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className={classes.footer}>
			<div>
				<a href="https://github.com/tientran0019/boilerplate-nextjs-antd-less" target="_blank" rel="noopener noreferrer">Nextjs Boilerplate</a>
				<span> 2019. All Rights Reserved.</span>
			</div>
			<div className="ml-auto">
				<span>Powered by </span>
				<a href="#">tientran0019@gmail.com</a>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
	// classes: {},
};

export default Footer;
