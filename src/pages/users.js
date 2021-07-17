/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:51:30
*------------------------------------------------------- */

import React from 'react';

import Head from 'src/components/Head';

import Users from 'src/containers/UsersList';

import wrapperStore from 'src/redux';

import { getList } from 'src/redux/actions/users';

export const getServerSideProps = wrapperStore.getServerSideProps((store) => async (context) => {
	const users = await store.dispatch(await getList());

	return {
		props: {
			userList: users,
		},
	};
});

const UsersPage = (props) => {
	return (
		<>
			<Head title="Users" />
			<Users {...props} />
		</>
	);
};

UsersPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

UsersPage.defaultProps = {
	// classes: {},
};

export default UsersPage;
