/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('snapshot3Appeals', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		appealYr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPEAL_YR'
		},
		appealkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'APPEALKEY'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'CURR_VAL'
		}
	}, {
		tableName: 'SNAPSHOT3_APPEALS',
		timestamps: false
	});
};
