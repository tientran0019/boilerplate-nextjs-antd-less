/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-31 17:02:41
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { LoadingOutlined } from '@ant-design/icons';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Loading = () => {
	// const { } = props;

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: '100%',
				height: '100vh',
				zIndex: 999999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<LoadingOutlined style={{ fontSize: 40, color: '#14639F' }} />
		</div>
	);
};

Loading.propTypes = propTypes;

Loading.defaultProps = defaultProps;

export default Loading;
