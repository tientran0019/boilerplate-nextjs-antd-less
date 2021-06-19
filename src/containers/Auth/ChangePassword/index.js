/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-01-13 22:57:59
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useAsync from 'react-use/lib/useAsync';

import AuthStorage from 'src/utils/auth-storage';
import Router from 'next/router';

import Image from 'next/image';

import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import { actionChangePassword } from 'src/redux/actions/auth';

import classes from './style.module.less';

const propTypes = {
	// token: PropTypes.string.isRequired,
};

const defaultProps = {
	// token: '',
};

const ChangePassword = (props) => {
	// const { token } = props;

	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState(false);

	useAsync(async () => {
		if (!AuthStorage.loggedIn) {
			Router.push('/login');
		}
	}, []);

	const onFinish = async (values) => {
		try {
			setLoading(true);
			await dispatch(await actionChangePassword({
				...values,
			}));

			message.success('Change password successfully');

			Router.push('/');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className={classes.wrapper}
		>
			<div className={classes.left}>
				<div className={classes.leftOverlay} />
				<div className={classes.leftContent}>
					<div
						className="d-flex justify-content-center align-content-center flex-1 flex-column"
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
								padding: '40px 20px',
								margin: '0 auto 40px',
								borderRadius: 4,
								background: '#fff',
							}}
							size="large"
						>
							<div className="text-center mb-5">
								<Image
									src="/images/logo.png"
									alt="Logo"
									width={150}
									height={150}
								/>
							</div>
							<Form.Item
								name="oldPassword"
								hasFeedback
								rules={[
									{
										required: true,
										message: 'Please input your new password!',
									},
									{
										min: 6,
										message: 'Password must be at least 6 characters!',
									},
								]}
							>
								<Input.Password
									prefix={<LockOutlined className="site-form-item-icon" />}
									placeholder="Old Password"
								/>
							</Form.Item>
							<Form.Item
								name="newPassword"
								hasFeedback
								rules={[
									{
										required: true,
										message: 'Please input your new password!',
									},
									{
										min: 6,
										message: 'Password must be at least 6 characters!',
									},
								]}
							>
								<Input.Password
									prefix={<LockOutlined className="site-form-item-icon" />}
									placeholder="New Password"
								/>
							</Form.Item>
							<Form.Item
								name="confirmPassword"
								hasFeedback
								rules={[
									{
										required: true,
										message: 'Please input your confirm password!',
									},
									{
										min: 6,
										message: 'Confirm password must be at least 6 characters!',
									},
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (!value || getFieldValue('newPassword') === value) {
												return Promise.resolve();
											}

											// eslint-disable-next-line prefer-promise-reject-errors
											return Promise.reject('The two passwords that you entered do not match!');
										},
									}),
								]}
							>
								<Input.Password
									prefix={<LockOutlined className="site-form-item-icon" />}
									placeholder="Confirm Password"
								/>
							</Form.Item>

							<Button type="primary" block htmlType="submit" className="login-form-button" loading={loading}>
								Change Password
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

ChangePassword.propTypes = propTypes;

ChangePassword.defaultProps = defaultProps;

export default ChangePassword;
