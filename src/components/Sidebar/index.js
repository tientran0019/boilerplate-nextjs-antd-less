/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:27:02
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import { Menu } from 'antd';
import {
	DashboardOutlined,
	ExceptionOutlined,
	MailOutlined,
} from '@ant-design/icons';


const propTypes = {
	// children: PropTypes.node,
};

const defaultProps = {};

const Sidebar = () => {
	// const { } = props;

	const router = useRouter();

	// eslint-disable-next-line no-unused-vars
	const [a, root] = router.pathname?.split('/');

	return (
		<Menu
			defaultSelectedKeys={['/']}
			selectedKeys={['/' + root]}
			mode="inline"
			theme="dark"
		>
			<Menu.Item key="/" onClick={() => router.push('/')}>
				<DashboardOutlined />
				<span>Dashboard</span>
			</Menu.Item>
			<Menu.Item key="/pending" onClick={() => router.push('/pending')}>
				<ExceptionOutlined />
				<span>Pending</span>
			</Menu.Item>
			<Menu.SubMenu
				key="sub1"
				title={
					<span>
						<MailOutlined />
						<span>Navigation One</span>
					</span>
				}
			>
				<Menu.Item key="5">Option 5</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item>
				<Menu.Item key="7">Option 7</Menu.Item>
				<Menu.Item key="8">Option 8</Menu.Item>
			</Menu.SubMenu>
		</Menu>
	);
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
