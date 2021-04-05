/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ppdepr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		item: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'ITEM'
		},
		group: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'GROUP'
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'YEAR'
		},
		depr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEPR'
		}
	}, {
		tableName: 'PPDEPR',
		timestamps: false
	});
};
