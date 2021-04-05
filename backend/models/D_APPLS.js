/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dAppls', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		appealkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'APPEALKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			type: DataTypes.DATEONLY,
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
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURR_VAL'
		},
		returnVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RETURN_VAL'
		},
		vid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VID'
		},
		mailDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'MAIL_DATE'
		},
		aplstat: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APLSTAT'
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
			defaultValue: '((0))',
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
			defaultValue: '((0))',
			field: 'WIDTH'
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ANDATE'
		},
		mail21: {
			type: DataTypes.DATEONLY,
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
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'BOEDATE'
		},
		supdate: {
			type: DataTypes.DATEONLY,
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
			defaultValue: '((0))',
			field: 'MILEAGE'
		},
		vehcond: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VEHCOND'
		},
		boaVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOA_VAL'
		},
		arbVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ARB_VAL'
		},
		d21Val: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'D21_VAL'
		},
		scVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SC_VAL'
		},
		resolvVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RESOLV_VAL'
		},
		arbdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ARBDATE'
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
		choVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CHO_VAL'
		},
		chodate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'CHODATE'
		},
		resolvdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'RESOLVDATE'
		},
		tbillVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TBILL_VAL'
		},
		tbillCode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TBILL_CODE'
		}
	}, {
		tableName: 'D_APPLS',
		timestamps: false
	});
};
