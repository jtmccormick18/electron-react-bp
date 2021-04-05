/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('taxfee', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		taxtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXTYPE'
		},
		compNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COMP_NO'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AMOUNT'
		}
	}, {
		tableName: 'TAXFEE',
		timestamps: false
	});
};
