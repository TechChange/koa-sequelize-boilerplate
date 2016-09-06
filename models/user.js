module.exports = (sequelize, DataTypes) => {

	const User = sequelize.define('user', {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		first_name: {
			type: DataTypes.STRING,
		},
		last_name: {
			type: DataTypes.STRING,
		}
	});

	return User;
}
