/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('costdepr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		life: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE'
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AGE'
		},
		depr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEPR'
		}
	}, {
		tableName: 'COSTDEPR',
		timestamps: false
	});
};
