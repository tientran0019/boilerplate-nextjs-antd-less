/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-17 12:29:42
*------------------------------------------------------- */

// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
	reactStrictMode: true,
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'frontmatter-markdown-loader',
		});

		// config.plugins.push(
		// 	new AntdDayjsWebpackPlugin(),
		// );

		return config;
	},
}
