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

					<link rel="icon" type="image/png" sizes="144x144" href="/icons/144x144.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/icons/144x144.png" />

					<link rel="icon" type="image/png" sizes="96x96" href="/icons/96x96.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/icons/96x96.png" />

					<link rel="icon" type="image/png" sizes="72x72" href="/icons/72x72.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/icons/72x72.png" />

					<link rel="icon" type="image/png" sizes="48x48" href="/icons/48x48.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="48x48" href="/icons/48x48.png" />

					{/* END PWA */}
					<Meta />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
