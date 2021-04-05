/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wingapFiles', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		table: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TABLE'
		},
		schedule: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SCHEDULE'
		},
		primarykey: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PRIMARYKEY'
		}
	}, {
		tableName: 'WINGAP_FILES',
		timestamps: false
	});
};
