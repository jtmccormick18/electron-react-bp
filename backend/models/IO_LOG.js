/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ioLog', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'PERSONAL',
				key: 'PERSKEY'
			},
			field: 'PERSKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		checkDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'CHECK_DATE'
		},
		checkTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CHECK_TIME'
		},
		inOut: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IN_OUT'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIGYR'
		}
	}, {
		tableName: 'IO_LOG',
		timestamps: false
	});
};
