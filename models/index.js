const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

config.define = {
	underscored: true
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Load each model file
const models = Object.assign({}, ...fs.readdirSync(__dirname)
	.filter((file) => {
		return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js') && (file !== basename);
	})
	.map((file) => {
		const model = require(path.join(__dirname, file));

		return {
			[model.name]: model.init(sequelize),
		};
	})
);

// Load model associations
for (const model of Object.keys(models)) {
	typeof models[model].associate === 'function' && models[model].associate(models);
}

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

