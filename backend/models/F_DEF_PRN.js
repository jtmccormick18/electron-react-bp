/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fDefPrn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
			field: 'LOGIN'
		},
		respt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'RESPT'
		},
		compt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'COMPT'
		},
		accpt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ACCPT'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DIGYR'
		},
		resdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RESDEPYR'
		},
		comdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COMDEPYR'
		},
		mhdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MHDEPYR'
		},
		accdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACCDEPYR'
		},
		combasecst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'COMBASECST'
		},
		hits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HITS'
		},
		locksys: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'LOCKSYS'
		},
		smallbreak: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SMALLBREAK'
		},
		pueqratio: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'PUEQRATIO'
		},
		fprawmater: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FPRAWMATER'
		},
		fpfingoods: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FPFINGOODS'
		},
		fpoutstate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FPOUTSTATE'
		},
		basiccost: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
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
		},
		applyInfl: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPLY_INFL'
		},
		truncate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'TRUNCATE'
		},
		autoCoa: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'AUTO_COA'
		},
		wgVersion: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WG_VERSION'
		},
		autoPpcoa: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'AUTO_PPCOA'
		},
		pt50RLive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'PT50R_LIVE'
		},
		coaAuto: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'COA_AUTO'
		},
		phoneExt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PHONE_EXT'
		},
		areamult6: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'AREAMULT6'
		},
		atticmult: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ATTICMULT'
		},
		bsmtmult: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'BSMTMULT'
		},
		flappinc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FLAPPINC'
		},
		conum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONUM'
		},
		auditevent: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'AUDITEVENT'
		},
		auditdata: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'AUDITDATA'
		},
		mavexmpt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MAVEXMPT'
		},
		sketchexpath: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SKETCHEXPATH'
		},
		svrsketchexpath: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SVRSKETCHEXPATH'
		},
		svrphotopath: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SVRPHOTOPATH'
		},
		svrname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SVRNAME'
		},
		svrpt61Path: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SVRPT61PATH'
		},
		svrsharepath: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SVRSHAREPATH'
		},
		mad: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MAD'
		},
		intlabelheat: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INTLABELHEAT'
		}
	}, {
		tableName: 'F_DEF_PRN',
		timestamps: false
	});
};
