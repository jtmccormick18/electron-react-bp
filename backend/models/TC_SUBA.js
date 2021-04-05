/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tcSuba', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REALKEY'
		},
		orighomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ORIGHOMVAL'
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
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DIGYR'
		},
		taxtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TAXTYPE'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		asmtpct: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ASMTPCT'
		},
		entity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENTITY'
		},
		mills: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'MILLS'
		},
		mavexmpt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MAVEXMPT'
		},
		grossAsmt: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'GrossAsmt'
		},
		nSaLand: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'nSA_Land'
		},
		prefAccyFmv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'PrefAccy_FMV'
		},
		prefAccyMav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'PrefAccy_MAV'
		},
		nSv: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSV'
		},
		nSt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nST'
		},
		nSw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSW'
		},
		nSh: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSH'
		},
		nSb: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSB'
		},
		nSj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSJ'
		},
		nSz: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSZ'
		},
		homeexempt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEEXEMPT'
		},
		hsCode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HS_CODE'
		},
		maxhsState: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAXHS_STATE'
		},
		stateSt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'STATE_ST'
		},
		inlieuSt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INLIEU_ST'
		},
		freezeSt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FREEZE_ST'
		},
		floatSt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'FLOAT_ST'
		},
		unlimSt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'UNLIM_ST'
		},
		maxacSt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'MAXAC_ST'
		},
		hslCode: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'HSL_CODE'
		},
		maxhsLocal: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'MAXHS_LOCAL'
		},
		stateLo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'STATE_LO'
		},
		inlieuLo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'INLIEU_LO'
		},
		freezeLo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'FREEZE_LO'
		},
		floatLo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'FLOAT_LO'
		},
		unlimLo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'UNLIM_LO'
		},
		maxacLo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'MAXAC_LO'
		},
		nLandVal: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'nLandVal'
		},
		nImpVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'nImpVal'
		},
		landfmv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LANDFMV'
		},
		baseHomVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BaseHomVal'
		},
		currHomVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CurrHomVal'
		},
		stateHsValImpFmv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'StateHsVal_Imp_FMV'
		},
		stateHsValImpMav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'StateHsVal_Imp_MAV'
		},
		localHsValImpFmv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LocalHsVal_Imp_FMV'
		},
		localHsValImpMav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LocalHsVal_Imp_MAV'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		}
	}, {
		tableName: 'TC_SUBA',
		timestamps: false
	});
};
