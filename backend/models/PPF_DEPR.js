/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ppfDepr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		item: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ITEM'
		},
		group: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GROUP'
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YEAR'
		},
		depr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEPR'
		}
	}, {
		tableName: 'PPF_DEPR',
		timestamps: false
	});
};
