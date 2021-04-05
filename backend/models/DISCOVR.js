/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discovr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		discovkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'DISCOVKEY'
		},
		desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESC'
		}
	}, {
		tableName: 'DISCOVR',
		timestamps: false
	});
};
