const cli = require('next/dist/cli/next-export');
const loadEnvConfig = require('./env');

loadEnvConfig();

cli.nextExport()
