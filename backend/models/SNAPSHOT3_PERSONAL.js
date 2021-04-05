/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('snapshot3Personal', {
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'PERSKEY'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'CURR_VAL'
		}
	}, {
		tableName: 'SNAPSHOT3_PERSONAL',
		timestamps: false
	});
};
