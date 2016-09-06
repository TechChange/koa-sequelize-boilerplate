const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

config.define = {
    underscored: true
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

fs
.readdirSync(__dirname)
.filter((file) => {
	return (file.indexOf('.') !== 0) && (file !== basename);
})
.forEach((file) => {
	const model = sequelize.import(path.join(__dirname, file));

	db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
