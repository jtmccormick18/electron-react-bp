/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('maLog', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		syncDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'SYNC_DATE'
		},
		syncTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SYNC_TIME'
		}
	}, {
		tableName: 'MA_LOG',
		timestamps: false
	});
};
