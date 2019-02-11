/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-02-11 10:33:11
*------------------------------------------------------- */

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import classes from './style.less';

export default class Header extends PureComponent {
	// static propTypes = {
	//     // classes: PropTypes.object.isRequired,
	// }

	// static defaultProps = {}

	render() {
		// const {  } = this.props;

		return (
			<div className={classes.wrapper}>
				Header
			</div>
		);
	}
}
