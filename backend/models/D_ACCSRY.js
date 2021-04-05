/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dAccsry', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		acckey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		compNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COMP_NO'
		},
		impVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMP_VAL'
		},
		yearBuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR_BUILT'
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
		ovrVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OVR_VAL'
		},
		idunits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IDUNITS'
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
		tableName: 'D_ACCSRY',
		timestamps: false
	});
};
