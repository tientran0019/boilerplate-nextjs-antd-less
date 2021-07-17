/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-31 17:02:41
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { LoadingOutlined } from '@ant-design/icons';

import THEME from 'src/constants/theme';

const propTypes = {
	fullScreen: PropTypes.bool,
	loading: PropTypes.bool,
};

const defaultProps = {
	fullScreen: false,
	loading: false,
};

const Loading = (props) => {
	const { fullScreen, loading } = props;

	if (!loading) {
		return null;
	}

	if (!fullScreen) {
		return (
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: '100%',
					height: '100%',
					zIndex: 99,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<LoadingOutlined style={{ fontSize: 40, color: THEME['@primary-color'] }} />
			</div>
		);
	}

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
			<LoadingOutlined style={{ fontSize: 40, color: THEME['@primary-color'] }} />
		</div>
	);
};

Loading.propTypes = propTypes;

Loading.defaultProps = defaultProps;

export default Loading;
