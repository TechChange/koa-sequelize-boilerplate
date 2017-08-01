const Sequelize = require('sequelize');
const Model = require('../utils/Model');


class User extends Model {

	/**
	 * Sets up the prototypical fields for the model.
	 *
	 * @function fields
	 * @static
	 *
	 * @returns {object} - The fields for the model
	 */
	static get fields() {
		return {
			id: {
				primaryKey: true,
				type: Sequelize.INTEGER,
				autoIncrement: true
			},
			first_name: {
				type: Sequelize.TEXT,
			},
			last_name: {
				type: Sequelize.TEXT,
			}
		};
	}

}

module.exports = User;

