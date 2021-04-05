/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('webexRealprop', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OWNKEY'
		},
		houseNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HOUSE_NO'
		},
		extension: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXTENSION'
		},
		stdirect: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STDIRECT'
		},
		sttype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STTYPE'
		},
		streetNam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STREET_NAM'
		},
		unit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNIT'
		},
		landlot: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDLOT'
		},
		landdist: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDDIST'
		},
		landgmd: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDGMD'
		},
		zoningcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZONINGCODE'
		},
		comment1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENT1'
		},
		returnVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'RETURN_VAL'
		},
		assessRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ASSESS_RSN'
		},
		parcelNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		valChg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'VAL_CHG'
		},
		prevVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'PREV_VAL'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'CURR_VAL'
		},
		valchgdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'VALCHGDATE'
		},
		landType: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LAND_TYPE'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		homeexempt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEEXEMPT'
		},
		cuvRenew: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'CUV_RENEW'
		},
		orighomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORIGHOMVAL'
		},
		currhomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CURRHOMVAL'
		},
		reviewdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'REVIEWDATE'
		},
		datenow: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DATENOW'
		},
		appraiser: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRAISER'
		},
		pcy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PCY'
		},
		ccy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CCY'
		},
		hcy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HCY'
		},
		ovrideval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'OVRIDEVAL'
		},
		influence1: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE1'
		},
		influence2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE2'
		},
		influence3: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE3'
		},
		influence4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE4'
		},
		influence5: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE5'
		},
		influence6: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE6'
		},
		influence7: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'INFLUENCE7'
		},
		infltype1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE1'
		},
		infltype2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE2'
		},
		infltype3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE3'
		},
		infltype4: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE4'
		},
		infltype5: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE5'
		},
		infltype6: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE6'
		},
		infltype7: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE7'
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
		topography: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TOPOGRAPHY'
		},
		water: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WATER'
		},
		sewer: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SEWER'
		},
		gas: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GAS'
		},
		electricty: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ELECTRICTY'
		},
		roadstreet: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROADSTREET'
		},
		roadclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROADCLASS'
		},
		distdrain: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DISTDRAIN'
		},
		nbrstatus: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NBRSTATUS'
		},
		zoning: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZONING'
		},
		acc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACC'
		},
		desire: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESIRE'
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
		woodacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WOODACRES'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		},
		vendno: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VENDNO'
		},
		histval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'HISTVAL'
		},
		fuserid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUSERID'
		},
		neighbhood: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEIGHBHOOD'
		},
		newownrflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'NEWOWNRFLG'
		},
		splitsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SPLITSFLG'
		},
		homedate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'HOMEDATE'
		},
		spdist: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SPDIST'
		},
		realgrowth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALGROWTH'
		},
		inflgrowth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INFLGROWTH'
		},
		acctstatus: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ACCTSTATUS'
		},
		histyr1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HISTYR1'
		},
		histval1: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'HISTVAL1'
		},
		histyr2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HISTYR2'
		},
		histval2: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'HISTVAL2'
		},
		histyr3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HISTYR3'
		},
		histval3: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'HISTVAL3'
		},
		lat: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LAT'
		},
		lon: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LON'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		alternate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ALTERNATE'
		},
		landAppr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LAND_APPR'
		},
		ovrdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'OVRDATE'
		},
		ovrRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OVR_RSN'
		},
		aCalc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'A_CALC'
		},
		pCalc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'P_CALC'
		},
		ezy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EZY'
		},
		ezExempt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'EZ_EXEMPT'
		},
		quad: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUAD'
		},
		income: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INCOME'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EXISTS'
		},
		subdName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBD_NAME'
		},
		subdLot: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBD_LOT'
		},
		subdBlk: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBD_BLK'
		},
		subdSec: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBD_SEC'
		},
		subdPhse: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBD_PHSE'
		},
		ioName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IO_NAME'
		},
		ioDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'IO_DATE'
		},
		ovrAcres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'OVR_ACRES'
		},
		lndcomment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LNDCOMMENT'
		},
		parcelNo2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PARCEL_NO2'
		},
		boeYear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BOE_YEAR'
		},
		boeValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BOE_VALUE'
		},
		createdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATEDATE'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZIP'
		},
		statehsval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'STATEHSVAL'
		},
		flcy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLCY'
		},
		fl08Val: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'FL08VAL'
		},
		flbaseval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'FLBASEVAL'
		},
		fl08Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FL08ACRES'
		},
		flappnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLAPPNUM'
		},
		fl08Perac: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FL08PERAC'
		},
		mavorig: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVORIG'
		},
		mavcurr: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVCURR'
		},
		mavag: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVAG'
		},
		mavpref: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVPREF'
		},
		mavprev: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVPREV'
		},
		mavovr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MAVOVR'
		},
		fmvres: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'FMVRES'
		},
		fmvcom: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'FMVCOM'
		},
		fmvacc: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'FMVACC'
		},
		mavres: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVRES'
		},
		mavcom: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVCOM'
		},
		mavacc: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVACC'
		},
		saleVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SALE_VAL'
		},
		saleland1: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALELAND1'
		},
		saleland2: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALELAND2'
		},
		saleimp1: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALEIMP1'
		},
		saleimp2: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALEIMP2'
		},
		saleimpcs1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALEIMPCS1'
		},
		saleimpcs2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALEIMPCS2'
		},
		adfactor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ADFACTOR'
		},
		returnmail: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'RETURNMAIL'
		},
		orighsval2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORIGHSVAL2'
		},
		currhsval2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CURRHSVAL2'
		},
		covhs: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'COVHS'
		},
		covparent: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COVPARENT'
		},
		covrealkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COVREALKEY'
		},
		siteaddid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SITEADDID'
		},
		unittype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNITTYPE'
		},
		commentflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'COMMENTFLG'
		},
		a299C: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'A299C'
		},
		fieldcheck: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FIELDCHECK'
		},
		abatement: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ABATEMENT'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX'
		},
		abateExLand: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX_LAND'
		},
		growthovr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'GROWTHOVR'
		},
		maskphoto: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MASKPHOTO'
		}
	}, {
		tableName: 'WEBEX_REALPROP',
		timestamps: false
	});
};
