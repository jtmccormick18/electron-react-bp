/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('costindx', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		naics: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAICS'
		},
		indtype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INDTYPE'
		},
		indexyear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INDEXYEAR'
		},
		indexval: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INDEXVAL'
		}
	}, {
		tableName: 'COSTINDX',
		timestamps: false
	});
};
