/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaModel', {
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
		modelid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'MODELID'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		}
	}, {
		tableName: 'NADA_MODEL',
		timestamps: false
	});
};
