/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accCtrl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		compNo: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'COMP_NO'
		},
		baseCost: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BASE_COST'
		},
		priceCode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PRICE_CODE'
		},
		tableRef: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TABLE_REF'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		acctype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'ACCTYPE'
		},
		nodepr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'NODEPR'
		}
	}, {
		tableName: 'ACC_CTRL',
		timestamps: false
	});
};
