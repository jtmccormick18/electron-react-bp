/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('a299CTemp', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		}
	}, {
		tableName: 'A299C_TEMP',
		timestamps: false
	});
};
