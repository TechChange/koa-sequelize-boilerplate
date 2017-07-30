const app = require('./app');
const db = require('./models');

db.sequelize.sync().then(() => {
	app.listen(3000);
});