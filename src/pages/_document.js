/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-02-22 17:12:38
*------------------------------------------------------- */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import HeadShare from 'next/head';

import LINK from 'src/constants/urls';

const APP_NAME = 'Example';
const PRIMARY_COLOR = '#173D7A';
const APP_DESCRIPTION = 'App description';
const FB_APP_ID = 'app_id';
const IMG_SHARE = LINK.WEB_URL + '/icons/512x512.png';
const KEY_WORDS = 'reactjs; boilerplate; redux; nextjs; redux-saga; antd; less';

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

					<meta name="application-name" content={APP_NAME} />
					<meta name="apple-mobile-web-app-title" content={APP_NAME} />

					<meta name="apple-mobile-web-app-status-bar-style" content={'white-' + PRIMARY_COLOR} />
					<meta name="msapplication-starturl" content="/" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0" />

					<meta name="msapplication-navbutton-color" content={PRIMARY_COLOR} />
					<meta name="theme-color" content={PRIMARY_COLOR} />

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
				</Head>
				<body>
					<HeadShare>
						<title>{APP_NAME}</title>
						<meta
							name="description"
							content={APP_DESCRIPTION}
						/>
						<meta
							content={KEY_WORDS}
							name="keywords"
						/>
						{/* Twitter */}
						<meta name="twitter:card" content="summary" />
						<meta name="twitter:site" content={'@' + APP_NAME.toLowerCase()} />
						<meta name="twitter:title" content={APP_NAME} />
						<meta
							name="twitter:description"
							content={APP_DESCRIPTION}
						/>
						<meta name="twitter:image" content={IMG_SHARE} />
						{/* Facebook */}
						<meta property="fb:app_id" content={FB_APP_ID} />
						<meta property="og:type" content="website" />
						<meta property="og:title" content={APP_NAME} />
						<meta
							property="og:description"
							content={APP_DESCRIPTION}
						/>
						<meta property="og:image" content={IMG_SHARE} />
						<meta property="og:image:width" content="200" />
						<meta property="og:image:height" content="200" />
						<meta property="og:locale" content="en_EN" />
						<meta property="og:url" content={LINK.WEB_URL} />
					</HeadShare>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
