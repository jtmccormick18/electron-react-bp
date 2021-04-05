/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dComimp', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		commkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMMKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		improvNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPROV_NO'
		},
		sectionNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SECTION_NO'
		},
		comimpovr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMIMPOVR'
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
		bldgVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BLDG_VAL'
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
		tableName: 'D_COMIMP',
		timestamps: false
	});
};
