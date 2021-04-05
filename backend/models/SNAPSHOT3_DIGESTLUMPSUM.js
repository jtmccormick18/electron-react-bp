/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('snapshot3Digestlumpsum', {
		heavyequip: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HEAVYEQUIP'
		},
		motorveh: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MOTORVEH'
		},
		mobilehome: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MOBILEHOME'
		},
		timber100: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TIMBER100'
		}
	}, {
		tableName: 'SNAPSHOT3_DIGESTLUMPSUM',
		timestamps: false
	});
};
