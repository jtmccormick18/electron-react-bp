/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fDef', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		add1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADD1'
		},
		add2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADD2'
		},
		add3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADD3'
		},
		city: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CITY'
		},
		state: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATE'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZIP'
		},
		phone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PHONE'
		},
		fax: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FAX'
		},
		email: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EMAIL'
		},
		web: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WEB'
		},
		login: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'LOGIN'
		},
		respt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RESPT'
		},
		compt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMPT'
		},
		accpt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCPT'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIGYR'
		},
		resdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RESDEPYR'
		},
		comdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMDEPYR'
		},
		mhdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MHDEPYR'
		},
		accdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCDEPYR'
		},
		combasecst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMBASECST'
		},
		hits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HITS'
		},
		locksys: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'LOCKSYS'
		},
		smallbreak: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SMALLBREAK'
		},
		pueqratio: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PUEQRATIO'
		},
		fprawmater: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FPRAWMATER'
		},
		fpfingoods: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FPFINGOODS'
		},
		fpoutstate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FPOUTSTATE'
		},
		basiccost: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BASICCOST'
		},
		spdesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SPDESC'
		},
		retndate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'RETNDATE'
		},
		pinpic: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PINPIC'
		},
		vendtext: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VENDTEXT'
		},
		occytext: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OCCYTEXT'
		},
		misctext: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MISCTEXT'
		}
	}, {
		tableName: 'F_def',
		timestamps: false
	});
};
