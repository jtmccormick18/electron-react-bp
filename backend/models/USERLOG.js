/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userlog', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		userlogkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'USERLOGKEY'
		},
		loginid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOGINID'
		},
		compName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COMP_NAME'
		},
		inDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'IN_DATE'
		},
		inTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IN_TIME'
		},
		outDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'OUT_DATE'
		},
		outTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OUT_TIME'
		},
		datecheck: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATECHECK'
		},
		timecheck: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TIMECHECK'
		}
	}, {
		tableName: 'USERLOG',
		timestamps: false
	});
};
