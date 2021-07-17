/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-01-14 23:07:23
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import { withRouter } from 'next/router';

import { getList } from 'src/redux/actions/users';

import UserCard from './UserCard';

const propTypes = {
	router: PropTypes.object.isRequired,
};

const defaultProps = {
	router: {},
};

const UsersList = (props) => {
	const { router, userList = [] } = props;

	// const { query = {} } = router;

	// const filterInit = React.useMemo(() => {
	// 	return {
	// 		skip: 0,
	// 		limit: 12,
	// 		order: 'updatedAt DESC',
	// 	};
	// }, []);

	// const dispatch = useDispatch();

	// const { value: userLists = [], loading, retry } = useAsyncRetry(async () => {
	// 	const { skip = 0, ...restQuery } = query || {};

	// 	const filter = Object.entries(restQuery).reduce((preVal, [key, val]) => {
	// 		if (val && val !== 'all') {
	// 			if (key === 'search') {
	// 				const regex = '/' + val + '/i';

	// 				return {
	// 					...preVal,
	// 					or: [
	// 						{ fullName: { regexp: regex } },
	// 						{ email: { regexp: regex } },
	// 					],
	// 				};
	// 			}

	// 			return {
	// 				...preVal,
	// 				[key]: val,
	// 			};
	// 		}

	// 		return preVal;
	// 	}, {});

	// 	const response = await dispatch(await getList({
	// 		firstLoad: true,
	// 		filter: {
	// 			...filterInit,
	// 			skip,
	// 			where: {
	// 				...filterInit.where,
	// 				...filter,
	// 			},
	// 		},
	// 	}));

	// 	return response;
	// }, [router.asPath]);

	return (
		<div className="row">
			{
				userList.map((el) => {
					return (
						<UserCard
							data={el}
							key={el.id}
						/>
					);
				})
			}
		</div>
	);
};

UsersList.propTypes = propTypes;

UsersList.defaultProps = defaultProps;

export default withRouter(UsersList);
