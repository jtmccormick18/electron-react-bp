/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('taxdetail', {
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
		ttDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TT_DESC'
		},
		asmtpct: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ASMTPCT'
		},
		covexmpt: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COVEXMPT'
		},
		hsexempt: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HSEXEMPT'
		},
		millage: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MILLAGE'
		},
		esttax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ESTTAX'
		},
		acckey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCKEY'
		}
	}, {
		tableName: 'TAXDETAIL',
		timestamps: false
	});
};
