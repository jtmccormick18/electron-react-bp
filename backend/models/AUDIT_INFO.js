/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('auditInfo', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		audinfokey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'AUDINFOKEY'
		},
		auditkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'AUDIT',
				key: 'AUDITKEY'
			},
			field: 'AUDITKEY'
		},
		reasoncode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASONCODE'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		}
	}, {
		tableName: 'AUDIT_INFO',
		timestamps: false
	});
};
