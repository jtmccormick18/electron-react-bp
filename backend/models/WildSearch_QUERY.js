/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wildSearchQuery', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		menutext: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'MENUTEXT'
		},
		querytext: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'QUERYTEXT'
		}
	}, {
		tableName: 'WildSearch_QUERY',
		timestamps: false
	});
};
