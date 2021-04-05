/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('defaults', {
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
			type: DataTypes.STRING,
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
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RESPT'
		},
		compt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'COMPT'
		},
		accpt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ACCPT'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'DIGYR'
		},
		resdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RESDEPYR'
		},
		comdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'COMDEPYR'
		},
		mhdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MHDEPYR'
		},
		accdepyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ACCDEPYR'
		},
		combasecst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'COMBASECST'
		},
		hits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'SMALLBREAK'
		},
		pueqratio: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PUEQRATIO'
		},
		fprawmater: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FPRAWMATER'
		},
		fpfingoods: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FPFINGOODS'
		},
		fpoutstate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			type: DataTypes.DATE,
			allowNull: true,
			field: 'RETNDATE'
		},
		pinpic: {
			type: DataTypes.STRING,
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
			defaultValue: '0',
			field: 'TRUNCATE'
		},
		autoCoa: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
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
			defaultValue: '0',
			field: 'AUTO_PPCOA'
		},
		pt50RLive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PT50R_LIVE'
		},
		coaAuto: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
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
			defaultValue: '0',
			field: 'AREAMULT6'
		},
		atticmult: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ATTICMULT'
		},
		bsmtmult: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BSMTMULT'
		},
		flappinc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			defaultValue: '0',
			field: 'AUDITEVENT'
		},
		auditdata: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'AUDITDATA'
		},
		mavexmpt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MAVEXMPT'
		},
		sketchexpath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SKETCHEXPATH'
		},
		svrsketchexpath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SVRSKETCHEXPATH'
		},
		svrphotopath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SVRPHOTOPATH'
		},
		svrname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SVRNAME'
		},
		svrpt61Path: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SVRPT61PATH'
		},
		svrsharepath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SVRSHAREPATH'
		},
		mad: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MAD'
		},
		intlabelheat: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INTLABELHEAT'
		}
	}, {
		tableName: 'DEFAULTS',
		timestamps: false
	});
};
