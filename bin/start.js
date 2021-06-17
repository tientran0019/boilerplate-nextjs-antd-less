const cli = require('next/dist/cli/next-start');
const loadEnvConfig = require('./env');

loadEnvConfig();

console.log('---', process.env);

cli.nextStart()
