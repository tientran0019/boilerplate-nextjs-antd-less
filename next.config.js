/* eslint-disable import/no-extraneous-dependencies */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-17 12:29:42
*------------------------------------------------------- */
const path = require('path');
const webpack = require('webpack');

const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const lessToJS = require('less-vars-to-js');
const fs = require('fs');

const loadEnvConfig = require('./bin/env');

loadEnvConfig();

const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'src/styles/variables.less'), 'utf8'));

const nextConfig = withBundleAnalyzer(withAntdLess({
	// modifyVars: {
	// 	'hack': 'true;@import "~antd/lib/style/themes/compact.less";',
	// 	...antdVariables,
	// },
	lessVarsFilePath: './src/styles/variables.less',
	lessVarsFilePathAppendToEndOfContent: true,
	// optional https://github.com/webpack-contrib/css-loader#object
	cssLoaderOptions: {
		modules: {
			localIdentName: process.env.NODE_ENV !== 'production' ? '[folder]__[local]__[hash:4]' : '[hash:8]',
		},
	},

	// for Next.js ONLY
	// nextjs: {
	// 	localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
	// },

	// Other Config Here...

	webpack(config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'frontmatter-markdown-loader',
		});

		config.plugins.push(
			new webpack.EnvironmentPlugin({
				NODE_ENV: process.env.NODE_ENV,
				'THEME': { ...antdVariables },
			}),
		);

		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}));

module.exports = nextConfig;
