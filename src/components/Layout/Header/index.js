/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:15:11
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Image from 'next/image';

import { Button } from 'antd';

import Link from 'next/link';

import { FaRegBell } from 'react-icons/fa';

import AvatarDropDown from 'src/components/Layout/AvatarDropDown';
import ModalLogin from 'src/components/ModalLogin';

import AuthStorage from 'src/utils/auth-storage';

import classes from './style.less';

const propTypes = {
	style: PropTypes.object,
};

const defaultProps = {
	style: {},
};

const Header = (props) => {
	const { style } = props;
	const auth = useSelector(state => state.auth);

	return (
		<div className={classes.headerWrapper} style={style}>
			<div className={classes.header}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col">
							<Link href="/">
								<a>
									<div className={classes.logo}>
										<Image
											src="/assets/images/brand/logo.png"
											alt="Logo"
											width={30}
											height={30}
										/>
										<h1 className="font-weight-bold">Boilerplate</h1>
									</div>
								</a>
							</Link>
						</div>
						<div className="col col-auto d-flex align-items-center">
							{
								AuthStorage.loggedIn && auth.id ?
									<>
										<FaRegBell
											style={{
												color: '#fff',
												fontSize: 24,
												marginRight: 20,
											}}
										/>
										<AvatarDropDown />
									</> :
									<Button size="small" ghost className="px-3" onClick={ModalLogin.open}>Login</Button>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
