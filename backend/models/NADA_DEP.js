/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaDep', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		nadaYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NADA_YEAR'
		},
		year: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'YEAR'
		},
		dep: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEP'
		}
	}, {
		tableName: 'NADA_DEP',
		timestamps: false
	});
};
