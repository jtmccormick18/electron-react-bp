/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mCtrl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		compNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COMP_NO'
		},
		baseCost: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			allowNull: true,
			field: 'ACCTYPE'
		}
	}, {
		tableName: 'M_CTRL',
		timestamps: false
	});
};
