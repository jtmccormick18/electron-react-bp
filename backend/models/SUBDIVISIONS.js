/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subdivisions', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		subdivkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'SUBDIVKEY'
		},
		subdName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBD_NAME'
		},
		subdDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SUBD_DATE'
		}
	}, {
		tableName: 'SUBDIVISIONS',
		timestamps: false
	});
};
