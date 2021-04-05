/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('calcexemptions', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		taxtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXTYPE'
		},
		excode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXCODE'
		},
		covHs: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COV_HS'
		},
		exmptorder: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXMPTORDER'
		},
		maxexempt: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAXEXEMPT'
		},
		actExempt: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACT_EXEMPT'
		}
	}, {
		tableName: 'CALCEXEMPTIONS',
		timestamps: false
	});
};
