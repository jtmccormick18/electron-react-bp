/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('indtype', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		indtype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INDTYPE'
		}
	}, {
		tableName: 'INDTYPE',
		timestamps: false
	});
};
