/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zip', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'ZIP'
		},
		city: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CITY'
		},
		state: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATE'
		}
	}, {
		tableName: 'ZIP',
		timestamps: false
	});
};
