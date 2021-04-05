/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dSales', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		salekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALEKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		grantee: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GRANTEE'
		},
		grantor: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GRANTOR'
		},
		saledate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'SALEDATE'
		},
		deedpage: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DEEDPAGE'
		},
		plotpage: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PLOTPAGE'
		},
		saleprice: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALEPRICE'
		},
		saleclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALECLASS'
		},
		strat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'STRAT'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		digestVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'DIGEST_VAL'
		}
	}, {
		tableName: 'D_SALES',
		timestamps: false
	});
};
