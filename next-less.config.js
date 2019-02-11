/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-02-11 11:56:51
*------------------------------------------------------- */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

module.exports = (nextConfig = {}) => {
	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			if (!options.defaultLoaders) {
				throw new Error(
					'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
				);
			}

			const { dev, isServer } = options;
			const {
				cssModules,
				cssLoaderOptions,
				postcssLoaderOptions,
				lessLoaderOptions = {},
			} = nextConfig;

			options.defaultLoaders.less = cssLoaderConfig(config, {
				extensions: ['less'],
				cssModules,
				cssLoaderOptions,
				postcssLoaderOptions,
				dev,
				isServer,
				loaders: [
					{
						loader: 'less-loader',
						options: lessLoaderOptions,
					},
				],
			});

			config.module.rules.push({
				test: /\.less$/,
				exclude: /node_modules/,
				use: options.defaultLoaders.less,
			});

			// Disabled cssModules for antd
			config.module.rules.push({
				test: /\.less$/,
				include: /node_modules/,
				use: cssLoaderConfig(config, {
					extensions: ['less'],
					cssModules: false,
					cssLoaderOptions: {},
					dev,
					isServer,
					loaders: [
						{
							loader: 'less-loader',
							options: lessLoaderOptions,
						},
					],
				}),
			});

			if (typeof nextConfig.webpack === 'function') {
				return nextConfig.webpack(config, options);
			}

			return config;
		},
	});
};
