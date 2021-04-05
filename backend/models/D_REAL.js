/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dReal', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OWNKEY'
		},
		houseNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
		returnVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RETURN_VAL'
		},
		assessRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ASSESS_RSN'
		},
		parcelNo: {
			type: DataTypes.STRING,
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
			defaultValue: '0',
			field: 'VAL_CHG'
		},
		prevVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PREV_VAL'
		},
		currVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURR_VAL'
		},
		landType: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
		orighomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ORIGHOMVAL'
		},
		currhomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURRHOMVAL'
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
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OVRIDEVAL'
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
		aValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'A_VALUE'
		},
		pValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'P_VALUE'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTALACRES'
		},
		vendno: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VENDNO'
		},
		histval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTVAL'
		},
		spdist: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SPDIST'
		},
		realgrowth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALGROWTH'
		},
		inflgrowth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLGROWTH'
		},
		ezy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EZY'
		},
		ezExempt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EZ_EXEMPT'
		},
		quad: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUAD'
		},
		incCs: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INC_CS'
		},
		incImp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INC_IMP'
		},
		income: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INCOME'
		},
		statehsval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'STATEHSVAL'
		},
		newlast: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWLAST'
		},
		newfirst: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWFIRST'
		},
		newmiddle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWMIDDLE'
		},
		newadd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWADD1'
		},
		newadd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWADD2'
		},
		newadd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWADD3'
		},
		newcity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWCITY'
		},
		newstate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWSTATE'
		},
		newzip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWZIP'
		},
		parcelNo2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO2'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mavcurr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVCURR'
		},
		mavag: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVAG'
		},
		mavpref: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVPREF'
		},
		mavprev: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVPREV'
		},
		saleVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SALE_VAL'
		},
		saleland1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALELAND1'
		},
		saleland2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALELAND2'
		},
		saleimpcs1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALEIMPCS1'
		},
		saleimp1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALEIMP1'
		},
		saleimpcs2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALEIMPCS2'
		},
		saleimp2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALEIMP2'
		},
		orighsval2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ORIGHSVAL2'
		},
		currhsval2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURRHSVAL2'
		},
		flcy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLCY'
		},
		unittype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNITTYPE'
		},
		siteaddid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SITEADDID'
		},
		a299C: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'A299C'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZIP'
		},
		apprname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'APPRNAME'
		},
		alternate: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ALTERNATE'
		}
	}, {
		tableName: 'D_REAL',
		timestamps: false
	});
};
