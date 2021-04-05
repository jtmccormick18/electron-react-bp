/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('naics', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		naics: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'NAICS'
		},
		naicstext: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAICSTEXT'
		},
		numtext: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NUMTEXT'
		}
	}, {
		tableName: 'NAICS',
		timestamps: false
	});
};
