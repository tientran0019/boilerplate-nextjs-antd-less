/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2018-02-12 01:19:42
*------------------------------------------------------- */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const path = require('path');
const fs = require('fs');
const { createServer } = require('http');
const next = require('next');
const routes = require('./src/routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

try {
	fs.statSync(path.join(__dirname, '.env'));
	// console.log('File .env exists.');
} catch (e) {
	console.error('-----------------------------------------------------');
	console.error('|                                                   |');
	console.error('|             File .env does not exist.             |');
	console.error('|                                                   |');
	console.error('-----------------------------------------------------');
	return;
}

app.prepare()
	.then(() => {
		createServer(handler)
			.listen(port, (err) => {
				if (err) throw err;
				console.log(`> Ready on http://localhost:${port} with env dev = ${dev}`);
			});
	});
