/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:08:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Image from 'next/image';

import classes from './style.less';

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className={classes.footerWrapper}>
			<div className="container py-4">
				<div className="row py-4">
					<div className="col-8">
						<Image
							src="/assets/images/brand/logo.png"
							alt="Logo"
							width={64}
							height={64}
						/>
						<p className="mt-2">A boilerplate for Reactjs app using nextjs, redux, antd, less.</p>

						<p>Author: Tien Tran (tientran0019@gmail.com)</p>
					</div>
					<div className="col-4">
						<ul className={classes.links}>
							<li><a target="_blank" rel="noreferrer" href="#">Contact Us</a></li>
							<li><a target="_blank" rel="noreferrer" href="#">Privacy Policy</a></li>
							<li><a target="_blank" rel="noreferrer" href="#">Terms & Conditions</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className={classes.footer}>
				<strong>Boilerplate</strong>
				<span> 2020 © All Rights Reserved.</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
	// classes: {},
};

export default Footer;
