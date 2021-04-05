/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('realLandBackup', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REALKEY'
		},
		ovrideval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'OVRIDEVAL'
		},
		aValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'A_VALUE'
		},
		pValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P_VALUE'
		},
		mavovr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MAVOVR'
		}
	}, {
		tableName: 'REAL_LAND_BACKUP',
		timestamps: false
	});
};
