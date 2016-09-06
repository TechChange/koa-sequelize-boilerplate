require('babel-register');
require('babel-polyfill');
const app = require('./server');
const db = require('./models');

db.sequelize.sync().then(() => {
	app.listen(3000);
});