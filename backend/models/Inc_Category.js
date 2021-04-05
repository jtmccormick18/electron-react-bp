/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('incCategory', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		catcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CATCODE'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		}
	}, {
		tableName: 'Inc_Category',
		timestamps: false
	});
};
