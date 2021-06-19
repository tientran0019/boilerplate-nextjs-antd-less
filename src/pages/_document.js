/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-02-22 17:12:38
*------------------------------------------------------- */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import Meta from 'src/components/Head/Meta';

import METADATA from 'src/constants/metadata';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					{/* PWA */}
					<link rel="manifest" href="/manifest.json" />

					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />

					<meta name="application-name" content={METADATA.APP_NAME} />
					<meta name="apple-mobile-web-app-title" content={METADATA.APP_NAME} />

					<meta name="apple-mobile-web-app-status-bar-style" content={'white-' + METADATA.PRIMARY_COLOR} />
					<meta name="msapplication-starturl" content="/" />

					<meta name="msapplication-navbutton-color" content={METADATA.PRIMARY_COLOR} />
					<meta name="theme-color" content={METADATA.PRIMARY_COLOR} />

					<link rel="shortcut icon" type="image/x-icon" sizes="512x512" href="/favicon.ico" />
					<link rel="shortcut icon" href="/favicon.ico" />

					<link rel="icon" type="image/png" sizes="512x512" href="/icons/512x512.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icons/512x512.png" />

					<link rel="icon" type="image/png" sizes="192x192" href="/icons/192x192.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icons/192x192.png" />

					{/* END PWA */}
					<Meta />

					<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
