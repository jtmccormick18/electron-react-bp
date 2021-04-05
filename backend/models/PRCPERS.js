/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prcpers', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OWNKEY'
		},
		name: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAME'
		}
	}, {
		tableName: 'PRCPERS',
		timestamps: false
	});
};
