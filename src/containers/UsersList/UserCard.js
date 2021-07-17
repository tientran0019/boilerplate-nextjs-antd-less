/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-07-17 14:50:50
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'src/components/Avatar';

import classes from './style.module.less';

const propTypes = {
	data: PropTypes.object.isRequired,
};

const defaultProps = {
	data: {},
};

const UserCard = (props) => {
	const { data } = props;

	return (
		<div className="col-4">
			<div className={classes.card}>
				<Avatar
					src={data.avatar}
					fullName={data.name}
				/>
				<h2 className="mb-0 mt-2">{data.name}</h2>
				<i>{data.email}</i>
			</div>
		</div>
	);
};

UserCard.propTypes = propTypes;

UserCard.defaultProps = defaultProps;

export default React.memo(UserCard);
