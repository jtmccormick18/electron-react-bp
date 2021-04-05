/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('appeals', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		appealkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'APPEALKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MOBILEKEY'
		},
		appealNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPEAL_NO'
		},
		appealtype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPEALTYPE'
		},
		appDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APP_DATE'
		},
		appealYr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPEAL_YR'
		},
		lastname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LASTNAME'
		},
		firstname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FIRSTNAME'
		},
		middle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MIDDLE'
		},
		corpname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CORPNAME'
		},
		agent: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'AGENT'
		},
		address1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS1'
		},
		address2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS2'
		},
		address3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS3'
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
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		returnmade: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RETURNMADE'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CURR_VAL'
		},
		returnVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETURN_VAL'
		},
		vid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'VID'
		},
		mailDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MAIL_DATE'
		},
		aplstat: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APLSTAT'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		appraiser: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRAISER'
		},
		aplclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APLCLASS'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TOTALACRES'
		},
		homephone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEPHONE'
		},
		workphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WORKPHONE'
		},
		decalyr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DECALYR'
		},
		decalnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DECALNUM'
		},
		yearbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEARBUILT'
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'WIDTH'
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'LENGTH'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		andate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ANDATE'
		},
		mail21: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MAIL21'
		},
		m21Prnt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'M21PRNT'
		},
		boedate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'BOEDATE'
		},
		supdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SUPDATE'
		},
		mvdecalyr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MVDECALYR'
		},
		tagno: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAGNO'
		},
		mvdecal: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MVDECAL'
		},
		vin: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VIN'
		},
		mileage: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MILEAGE'
		},
		vehcond: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VEHCOND'
		},
		arbdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ARBDATE'
		},
		boaVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'BOA_VAL'
		},
		d21Val: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'D21_VAL'
		},
		arbVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ARB_VAL'
		},
		scVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'SC_VAL'
		},
		resolvVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RESOLV_VAL'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
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
		choVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CHO_VAL'
		},
		chodate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CHODATE'
		},
		resolvdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'RESOLVDATE'
		},
		tbillVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TBILL_VAL'
		},
		tbillCode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TBILL_CODE'
		},
		boeNoshow: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BOE_NOSHOW'
		},
		arbNoshow: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ARB_NOSHOW'
		},
		choNoshow: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'CHO_NOSHOW'
		},
		a299C: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'A299C'
		},
		assertVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ASSERT_VAL'
		},
		appraisalReceive: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APPRAISAL_RECEIVE'
		},
		appraisalDecide: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APPRAISAL_DECIDE'
		},
		appraisalAccept: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'APPRAISAL_ACCEPT'
		},
		appraisalReject: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'APPRAISAL_REJECT'
		},
		nochgdateBoe: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'NOCHGDATE_BOE'
		},
		nochgdateArb: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'NOCHGDATE_ARB'
		},
		nochgdateCho: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'NOCHGDATE_CHO'
		},
		appraisalVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'APPRAISAL_VAL'
		},
		scNoshow: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SC_NOSHOW'
		},
		gfaVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GFA_VAL'
		},
		gfaUni: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GFA_UNI'
		},
		gfaTax: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GFA_TAX'
		},
		gfaExdeny: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GFA_EXDENY'
		},
		gfaCvbrch: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GFA_CVBRCH'
		},
		gfaCvdeny: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GFA_CVDENY'
		},
		evidence: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EVIDENCE'
		},
		scConference: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SC_CONFERENCE'
		},
		scNoAgreement: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SC_NO_AGREEMENT'
		},
		scConftime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SC_CONFTIME'
		},
		coIdNum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CO_ID_NUM'
		},
		boe: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'BOE'
		},
		arb: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ARB'
		},
		cho: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'CHO'
		},
		sup: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SUP'
		},
		interview: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INTERVIEW'
		},
		postmark: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'POSTMARK'
		},
		decision: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DECISION'
		},
		fwdCert: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'FWD_CERT'
		},
		infoNoaReq: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INFO_NOA_REQ'
		},
		infoBoeReq: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INFO_BOE_REQ'
		},
		infoNoaDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'INFO_NOA_DATE'
		},
		infoBoeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'INFO_BOE_DATE'
		}
	}, {
		tableName: 'APPEALS',
		timestamps: false
	});
};
