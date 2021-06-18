/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-17 12:29:42
*------------------------------------------------------- */

const withAntdLess = require('next-plugin-antd-less');
const path = require('path');
const loadEnvConfig = require('./bin/env');

loadEnvConfig();

module.exports = withAntdLess({
	// modifyVars: { '@primary-color': 'red' },
	lessVarsFilePath: './src/styles/variables.less',
	lessVarsFilePathAppendToEndOfContent: true,
	// optional https://github.com/webpack-contrib/css-loader#object
	cssLoaderOptions: {
		modules: {
			auto: /\.module\.\w+$/i,
			localIdentName: process.env.MODE !== 'production' ? '[folder]__[local]__[hash:4]' : '[hash:8]',
			localIdentContext: path.resolve(__dirname, 'src'),
		},
	},

	// Other Config Here...

	webpack(config) {
		return config;
	},
});
