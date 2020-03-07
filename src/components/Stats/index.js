/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-06 15:05:09
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.less';

const propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.any,
	value: PropTypes.any,
};

const defaultProps = {
	className: '',
	style: {},
	label: '--',
	value: '--',
};

const Stats = (props) => {
	const { className, label, value, style } = props;

	return (
		<div className={className + ' ' + classes.wrapper} style={style}>
			<div className={classes.left}>{label}:</div>
			<div className={classes.right}>{value}</div>
		</div>
	);
};

Stats.propTypes = propTypes;

Stats.defaultProps = defaultProps;

export default Stats;
