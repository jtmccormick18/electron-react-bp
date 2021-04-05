/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tcSubb', {
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REALKEY'
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
		mills: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'MILLS'
		},
		entity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENTITY'
		},
		grossAsmt: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'GrossAsmt'
		},
		nLandVal: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'nLandVal'
		},
		landfmv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LANDFMV'
		},
		nImpVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'nImpVal'
		},
		maxacLo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'MAXAC_LO'
		},
		mavexmpt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MAVEXMPT'
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
		localHsValLandVal: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'LocalHSVal_LandVal'
		},
		nSa: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'nSA'
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
		netTaxable: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'NetTaxable'
		},
		hsCode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HS_CODE'
		},
		hslCode: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'HSL_CODE'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		},
		maxacSt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'MAXAC_ST'
		},
		floatSt: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'FLOAT_ST'
		},
		maxhsState: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAXHS_STATE'
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
		floatFreezeLo: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'FLOAT_FREEZE_LO'
		},
		inlieuLo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'INLIEU_LO'
		},
		maxhsLocal: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'MAXHS_LOCAL'
		}
	}, {
		tableName: 'TC_SUBB',
		timestamps: false
	});
};
