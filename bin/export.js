/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-17 12:39:16
*------------------------------------------------------- */

const cli = require('next/dist/cli/next-export');
const loadEnvConfig = require('./env');

loadEnvConfig();

cli.nextExport();
