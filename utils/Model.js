const Sequelize = require('sequelize');

class Model extends Sequelize.Model {
	static init(sequelize) {

		// Allow for configurable options in the model definition.
		const options = Object.assign({}, this.config);

		options.sequelize = sequelize;

		// Initialize the model taking the fields from the model definition.
		super.init(this.fields, options);

		return this;
	}

	static getQueryable() {
		const attributes = [];

		for (const attribute in this.attributes) {
			if (this.attributes[attribute].queryable) {
				attributes.push(attribute);
			}
		}

		return attributes;
	}

}

module.exports = Model;
