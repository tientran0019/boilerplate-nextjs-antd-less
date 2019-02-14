/* eslint-disable import/no-extraneous-dependencies */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-02-11 11:51:01
*------------------------------------------------------- */

const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const withLessExcludeAntd = require('./next-less.config');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
	fs.readFileSync(path.resolve(__dirname, './src/theme/variables.less'), 'utf8'),
);

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.less'] = file => { };
}


module.exports = withPlugins([
	[withLessExcludeAntd, {
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: '[path]___[local]___[hash:base64:5]',
		},
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars: themeVariables,
		},
		[PHASE_PRODUCTION_BUILD]: {
			cssLoaderOptions: {
				localIdentName: '[hash:base64:8]',
			},
		},
	}],
]);
