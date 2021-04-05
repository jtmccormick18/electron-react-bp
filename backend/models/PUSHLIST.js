/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pushlist', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		dbname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DBNAME'
		}
	}, {
		tableName: 'PUSHLIST',
		timestamps: false
	});
};
