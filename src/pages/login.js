/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-07 10:09:53
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Image from 'next/image';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import BtnFacebook from 'src/components/Forms/BtnFacebook';
import BtnGoogle from 'src/components/Forms/BtnGoogle';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Login = (props) => {
	const onFinish = values => {
		console.log('Received values of form: ', values);
	};

	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{
				height: '100vh',
				width: '100wh',
			}}
		>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				style={{
					width: 350,
					padding: 20,
					margin: '0 auto',
					borderRadius: 4,
					background: '#fff',
				}}
			>
				<div className="text-center mb-4">
					<Image
						src="/assets/images/logo.svg"
						alt="Logo"
						width={80}
						height={80}
					/>
				</div>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<div className="d-flex justify-content-between">
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
						<a href="">Register now!</a>
					</div>
				</Form.Item>

				<Button type="primary" block htmlType="submit" className="login-form-button">
					Login
				</Button>
				<p className="text-center mt-5 text-note">
					Or
				</p>
				<div className="d-flex align-items-center justify-content-center">
					<BtnFacebook className="m-1" />
					<BtnGoogle className="m-1" />
				</div>
			</Form>
		</div>
	);
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

Login.Layout = ({ children }) => children;

export default Login;
