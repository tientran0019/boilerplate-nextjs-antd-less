/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-17 12:37:52
*------------------------------------------------------- */

const cli = require('next/dist/cli/next-build');
const loadEnvConfig = require('./env');

loadEnvConfig();

cli.nextBuild();
