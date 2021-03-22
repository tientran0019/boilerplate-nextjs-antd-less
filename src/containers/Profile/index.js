/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-03-01 15:33:12
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { Descriptions } from 'antd';

import formatDate from 'src/utils/format-date';

import Avatar from 'src/components/Avatar';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Profile = (props) => {
	// const { } = props;

	const auth = useSelector(state => state.auth);

	return (
		<div className="container py-4">
			<div className="row justify-content-center">
				<div className="col-7 text-center">
					<Avatar
						size={150}
						src={auth.avatar}
						fullName={auth.fullName}
					/>

					<h2 className="mt-3 mb-0">{auth.fullName}</h2>
					<div>{auth.email}</div>

					<Descriptions className="mt-5 text-left" bordered column={1}>
						<Descriptions.Item label="ID">{auth.id}</Descriptions.Item>
						<Descriptions.Item label="Email">{auth.email}</Descriptions.Item>
						<Descriptions.Item label="Phone Number">{auth.phone}</Descriptions.Item>
						<Descriptions.Item label="Created Date">{formatDate(auth.createdAt)}</Descriptions.Item>
						<Descriptions.Item label="Gender">{auth.gender}</Descriptions.Item>
						<Descriptions.Item label="Birth Date">{formatDate(auth.birthDate)}</Descriptions.Item>
						<Descriptions.Item label="Address">
							{auth.desc || '--'}
						</Descriptions.Item>
						<Descriptions.Item label="Description">
							{auth.desc || '--'}
						</Descriptions.Item>
					</Descriptions>
				</div>
			</div>
		</div>
	);
};

Profile.propTypes = propTypes;

Profile.defaultProps = defaultProps;

export default Profile;
