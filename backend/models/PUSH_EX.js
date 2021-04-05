/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pushEx', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		tableField: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TABLE_FIELD'
		},
		screen: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SCREEN'
		},
		loginid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LOGINID'
		}
	}, {
		tableName: 'PUSH_EX',
		timestamps: false
	});
};
