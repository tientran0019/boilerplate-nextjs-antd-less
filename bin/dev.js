/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-17 12:37:39
*------------------------------------------------------- */

const cli = require('next/dist/cli/next-dev');
const loadEnvConfig = require('./env');

loadEnvConfig({
	dev: true,
});

cli.nextDev();
