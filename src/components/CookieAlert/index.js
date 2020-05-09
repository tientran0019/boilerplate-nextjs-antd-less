/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-08 11:15:06
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Link from 'next/link';

import { Alert, Button } from 'antd';

import CookieSettings from 'src/utils/cookie-settings-storage';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const CookieAlert = (props) => {
	// const { } = props;

	const [show, setShow] = React.useState(!CookieSettings.accepted);

	if (!show) {
		return null;
	}

	return (
		<div
			style={{
				position: 'fixed',
				bottom: 0,
				right: 0,
				left: 0,
				zIndex: 999,
			}}
		>
			<Alert
				style={{
					borderRadius: 0,
				}}
				type="warning"
				showIcon={false}
				message={
					<div className="container d-block d-md-flex text-center text-md-left justify-content-between align-items-center">
						<div className="mr-0 mr-md-2 fs-sm mb-2 mb-md-0 flex-1">
							We use cookies to make interactions with our websites and services easy and meaningful, to better understand how they are used and to tailor advertising. You can read more and make your cookie choices <Link href="/cookie-policy"><a>here</a></Link>. By continuing to use this site you are giving us your consent to do this.
						</div>
						<Button type="primary" size="small" onClick={() => { CookieSettings.accepted = true; setShow(false); }}>Accept</Button>
					</div>
				}
			/>
		</div>
	);
};

CookieAlert.propTypes = propTypes;

CookieAlert.defaultProps = defaultProps;

export default CookieAlert;
