/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('delAircraft', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		airkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AIRKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		city: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CITY'
		},
		county: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COUNTY'
		},
		state: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATE'
		},
		make: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MAKE'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		yearbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEARBUILT'
		},
		newUsed: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEW_USED'
		},
		serialNum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SERIAL_NUM'
		},
		reg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REG'
		},
		datepurch: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATEPURCH'
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COST'
		},
		tbo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TBO'
		},
		timeLast: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TIME_LAST'
		},
		majortop: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MAJORTOP'
		},
		lastOver: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'LAST_OVER'
		},
		timeSince: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TIME_SINCE'
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VALUE'
		},
		book: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOOK'
		},
		page: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PAGE'
		},
		bookval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOOKVAL'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		valmethod: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VALMETHOD'
		},
		marketval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MARKETVAL'
		},
		incomeval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INCOMEVAL'
		},
		smoh: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SMOH'
		},
		dph: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DPH'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		planeVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PLANE_VAL'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAV'
		},
		adddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ADDDATE'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX'
		},
		unabatedval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNABATEDVAL'
		},
		location: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LOCATION'
		}
	}, {
		tableName: 'DEL_AIRCRAFT',
		timestamps: false
	});
};
