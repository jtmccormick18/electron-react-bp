/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cuRes', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		cureskey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'CURESKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'REALPROP',
				key: 'REALKEY'
			},
			field: 'REALKEY'
		},
		parentparc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PARENTPARC'
		},
		ccy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CCY'
		},
		yrSplit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YR_SPLIT'
		}
	}, {
		tableName: 'CU_RES',
		timestamps: false
	});
};
