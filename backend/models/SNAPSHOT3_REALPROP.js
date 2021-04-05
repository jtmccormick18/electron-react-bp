/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('snapshot3Realprop', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REALKEY'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'CURR_VAL'
		}
	}, {
		tableName: 'SNAPSHOT3_REALPROP',
		timestamps: false
	});
};
