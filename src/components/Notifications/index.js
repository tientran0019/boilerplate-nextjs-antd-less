/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-03-10 10:56:27
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Dropdown, Badge, Spin, Empty } from 'antd';

// import { IoMdNotificationsOutline } from 'react-icons/io';

import {
	NotificationOutlined,
} from '@ant-design/icons';

import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Notifications = (props) => {
	// const { } = props;

	const menu = (
		<div className={classes.menuDropdown}>
			<Spin spinning={false}>
				<div className="d-flex align-items-center justify-content-between px-3 py-1 border-bottom">
					<strong className="fs-lg">Notification</strong>
				</div>
				<div className={classes.list}>
					<Empty className="mt-5" />
				</div>
			</Spin>
		</div>
	);

	return (
		<Dropdown overlay={menu} trigger={['click']}>
			<div style={{ height: '50px', display: 'flex' }} className="px-3 cursor-pointer align-items-center">
				<Badge count={0} dot className="fs-md">
					<NotificationOutlined />
				</Badge>
			</div>
		</Dropdown>
	);
};

Notifications.propTypes = propTypes;

Notifications.defaultProps = defaultProps;

export default Notifications;
