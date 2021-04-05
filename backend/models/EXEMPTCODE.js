/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('exemptcode', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		excode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXCODE'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		statecode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATECODE'
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
		localalias: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOCALALIAS'
		}
	}, {
		tableName: 'EXEMPTCODE',
		timestamps: false
	});
};
