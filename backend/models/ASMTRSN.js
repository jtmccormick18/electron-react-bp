/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('asmtrsn', {
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
		pin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PIN'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		noticedate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'NOTICEDATE'
		},
		reasoncode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASONCODE'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		coaType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COA_TYPE'
		},
		show: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SHOW'
		}
	}, {
		tableName: 'ASMTRSN',
		timestamps: false
	});
};
