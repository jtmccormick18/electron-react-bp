/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rank', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		descript: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIPT'
		},
		multiplier: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MULTIPLIER'
		},
		rank: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'RANK'
		}
	}, {
		tableName: 'RANK',
		timestamps: false
	});
};
