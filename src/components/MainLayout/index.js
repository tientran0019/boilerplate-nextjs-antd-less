/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:38:42
*------------------------------------------------------- */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Layout, Avatar } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';


import Sidebar from 'src/components/Sidebar';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import classes from './style.less';

const { Content, Sider } = Layout;

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const MainLayout = (props) => {
	const { children } = props;

	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				className={classes.sidebar}
			>
				<div className={classes.logo}>
					<img src="/assets/images/brand/logo.png" alt="logo" height="30" />
					{!collapsed && <span>Boilerplate</span>}
				</div>
				<Sidebar />
			</Sider>
			<Layout
				className={classes.siteLayout}
				style={{
					paddingLeft: collapsed ? 80 : 200,
				}}
			>
				<Header
					style={{
						left: collapsed ? 80 : 200,
					}}
				>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: classes.trigger,
						onClick: handleToggle,
					})}
					<div className={classes.headerRight}>
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						/>
					</div>
				</Header>
				<Content
					style={{
						margin: 20,
					}}
				>
					{children}
				</Content>
				<Footer />
			</Layout>
		</Layout>
	);
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
