/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fPers', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			defaultValue: '0',
			field: 'RETURNMADE'
		},
		returnVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETURN_VAL'
		},
		returndate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'RETURNDATE'
		},
		prevVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PREV_VAL'
		},
		lastVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'LAST_VAL'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CURR_VAL'
		},
		meffVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MEFF_VAL'
		},
		invnVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'INVN_VAL'
		},
		boatVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'BOAT_VAL'
		},
		planeVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PLANE_VAL'
		},
		otherVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'OTHER_VAL'
		},
		frportVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FRPORT_VAL'
		},
		penaltyval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'BLDGSF'
		},
		salesf: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'SALESF'
		},
		notice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
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
			defaultValue: '0',
			field: 'FIELDAUDIT'
		},
		deskaudit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'DESKAUDIT'
		},
		fieldcheck: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
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
			defaultValue: '0',
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
			defaultValue: '0',
			field: 'ACCTSTATUS'
		},
		dsvsource: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'DSVSOURCE'
		},
		poreturn: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
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
			defaultValue: '0',
			field: 'SPDIST'
		}
	}, {
		tableName: 'f_pers',
		timestamps: false
	});
};
