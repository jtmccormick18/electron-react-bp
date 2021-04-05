/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('life', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		bldgtype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BLDGTYPE'
		},
		wallframe: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFRAME'
		},
		grade: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'GRADE'
		},
		life: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE'
		}
	}, {
		tableName: 'LIFE',
		timestamps: false
	});
};
