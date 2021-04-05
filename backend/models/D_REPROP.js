/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dReprop', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		repropkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REPROPKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		digclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGCLASS'
		},
		digstrat: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGSTRAT'
		},
		occupancy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OCCUPANCY'
		},
		ovrVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OVR_VAL'
		},
		timpVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TIMP_VAL'
		},
		income: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INCOME'
		},
		incomeVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INCOME_VAL'
		},
		statehsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'STATEHSFLG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAV'
		},
		sb346Val: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SB346VAL'
		},
		localhsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'LOCALHSFLG'
		}
	}, {
		tableName: 'D_REPROP',
		timestamps: false
	});
};
