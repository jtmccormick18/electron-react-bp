/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irsclass', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		irscls: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			primaryKey: true,
			field: 'IRSCLS'
		},
		desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESC'
		},
		apmgroup: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'APMGROUP'
		},
		life: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE'
		}
	}, {
		tableName: 'IRSCLASS',
		timestamps: false
	});
};
