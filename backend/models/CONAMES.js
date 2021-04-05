/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('conames', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		num: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NUM'
		},
		name: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAME'
		}
	}, {
		tableName: 'CONAMES',
		timestamps: false
	});
};
