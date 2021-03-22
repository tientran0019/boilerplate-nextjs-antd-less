/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-01-13 22:57:59
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Image from 'next/image';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { actionLogin } from 'src/redux/actions/auth';

const propTypes = {
	onCancel: PropTypes.func,
	afterLogin: PropTypes.func,
	maskClosable: PropTypes.bool,
};

const defaultProps = {
	onCancel: f => f,
	afterLogin: f => f,
	maskClosable: true,
};

const LoginForm = (props) => {
	const { onCancel, afterLogin, maskClosable } = props;

	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState(false);

	const onFinish = async (values) => {
		try {
			setLoading(true);
			await dispatch(await actionLogin({
				...values,
			}));
			await afterLogin();
			onCancel();
		} finally {
			setLoading(false);
			window.location.reload();
		}
	};

	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			style={{
				padding: '20px',
			}}
			size="large"
		>
			<div className="text-center mb-5">
				<Image
					src="/assets/images/brand/logo.png"
					alt="Logo"
					width={64}
					height={64}
				/>
				<h1 className="text-primary">Boilerplate</h1>
			</div>
			<Form.Item
				name="email"
				rules={[
					{
						type: 'email',
						message: 'The input is not valid E-mail!',
					}, {
						required: true,
						message: 'Please input your E-mail!',
					},
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
				<div className="text-center">
					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</div>
			</Form.Item>

			<Button type="primary" block htmlType="submit" className="login-form-button" loading={loading}>
				Login
			</Button>
			{
				maskClosable &&
				<Button type="link" block className="mt-3" onClick={onCancel}>
					Cancel
				</Button>
			}
		</Form>
	);
};

LoginForm.propTypes = propTypes;

LoginForm.defaultProps = defaultProps;

export default LoginForm;
