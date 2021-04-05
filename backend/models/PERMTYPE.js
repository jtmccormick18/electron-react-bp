/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permtype', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		permType: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'PERM_TYPE'
		}
	}, {
		tableName: 'PERMTYPE',
		timestamps: false
	});
};
