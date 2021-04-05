/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fDeprPrn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		item: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'ITEM'
		},
		group: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'GROUP'
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'YEAR'
		},
		depr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DEPR'
		}
	}, {
		tableName: 'F_DEPR_PRN',
		timestamps: false
	});
};
