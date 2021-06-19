/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:15:11
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import classes from './style.module.less';

const propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
};

const defaultProps = {
	children: null,
	style: {},
};

const Header = (props) => {
	const { children, style } = props;

	return (
		<div className={classes.headerWrapper}>
			<Layout.Header className={classes.header} style={style}>
				{children}
			</Layout.Header>
		</div>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
