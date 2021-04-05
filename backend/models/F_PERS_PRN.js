/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fPersPrn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'PERSKEY'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OWNKEY'
		},
		coIdNum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CO_ID_NUM'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		acctedit: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ACCTEDIT'
		},
		valueedit: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'VALUEEDIT'
		},
		propclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROPCLASS'
		},
		strata: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STRATA'
		},
		stNum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ST_NUM'
		},
		stExt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_EXT'
		},
		stDirect: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_DIRECT'
		},
		stName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_NAME'
		},
		stType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_TYPE'
		},
		unit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNIT'
		},
		records: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RECORDS'
		},
		busiId: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ID'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		busphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSPHONE'
		},
		homphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMPHONE'
		},
		faxnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FAXNUM'
		},
		returnmade: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'RETURNMADE'
		},
		returnVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RETURN_VAL'
		},
		returndate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'RETURNDATE'
		},
		prevVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PREV_VAL'
		},
		lastVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LAST_VAL'
		},
		currVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CURR_VAL'
		},
		meffVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MEFF_VAL'
		},
		invnVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INVN_VAL'
		},
		boatVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BOAT_VAL'
		},
		planeVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PLANE_VAL'
		},
		otherVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OTHER_VAL'
		},
		frportVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FRPORT_VAL'
		},
		penaltyval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PENALTYVAL'
		},
		naics: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAICS'
		},
		bldgsf: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BLDGSF'
		},
		salesf: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SALESF'
		},
		notice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'NOTICE'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		fieldaudit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FIELDAUDIT'
		},
		deskaudit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'DESKAUDIT'
		},
		fieldcheck: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FIELDCHECK'
		},
		lastaudit: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'LASTAUDIT'
		},
		freeprtflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FREEPRTFLG'
		},
		andate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ANDATE'
		},
		chgappr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CHGAPPR'
		},
		acctappr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ACCTAPPR'
		},
		acctaud: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ACCTAUD'
		},
		orgyear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ORGYEAR'
		},
		busyear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSYEAR'
		},
		acctstatus: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ACCTSTATUS'
		},
		dsvsource: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DSVSOURCE'
		},
		poreturn: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'PORETURN'
		},
		contact: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONTACT'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EMAIL'
		},
		spdist: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SPDIST'
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
		auditor: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'AUDITOR'
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
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EXISTS'
		},
		reviewdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'REVIEWDATE'
		},
		webAdd: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WEB_ADD'
		},
		estValue: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EST_VALUE'
		},
		noPt50: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'NO_PT50'
		},
		createdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATEDATE'
		},
		photo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'PHOTO'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZIP'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVORIG'
		},
		mavcurr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVCURR'
		},
		mavprev: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVPREV'
		},
		mavmeff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVMEFF'
		},
		mavinvn: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVINVN'
		},
		mavboat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVBOAT'
		},
		mavplane: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVPLANE'
		},
		mavother: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVOTHER'
		},
		mavfrport: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVFRPORT'
		},
		hdeExempt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HDE_EXEMPT'
		},
		sst: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SST'
		},
		returnmail: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'RETURNMAIL'
		},
		meffAdj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'MEFF_ADJ'
		},
		adjDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADJ_DESC'
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
		busphoneExt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSPHONE_EXT'
		},
		onsiteReview: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ONSITE_REVIEW'
		},
		onsitedate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ONSITEDATE'
		},
		commentflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'COMMENTFLG'
		},
		review: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'REVIEW'
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
		}
	}, {
		tableName: 'F_PERS_PRN',
		timestamps: false
	});
};
