/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viewlog', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		filename: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FILENAME'
		},
		pkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PKEY'
		},
		loginid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOGINID'
		},
		viewDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'VIEW_DATE'
		},
		viewTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VIEW_TIME'
		},
		closeTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLOSE_TIME'
		}
	}, {
		tableName: 'VIEWLOG',
		timestamps: false
	});
};
