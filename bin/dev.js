const cli = require('next/dist/cli/next-dev');
const loadEnvConfig = require('./env');

loadEnvConfig({
	dev: true,
});

cli.nextDev()
