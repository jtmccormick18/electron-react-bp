/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dorCuv', {
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		conum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONUM'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DIGYR'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		ccy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CCY'
		},
		saleprice: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALEPRICE'
		},
		saledate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SALEDATE'
		},
		timberVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'TIMBER_VAL'
		},
		impVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'IMP_VAL'
		},
		netSp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'NET_SP'
		},
		landResid: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LAND_RESID'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		},
		ag1Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG1_ACRES'
		},
		ag2Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG2_ACRES'
		},
		ag3Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG3_ACRES'
		},
		ag4Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG4_ACRES'
		},
		ag5Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG5_ACRES'
		},
		ag6Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG6_ACRES'
		},
		ag7Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG7_ACRES'
		},
		ag8Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG8_ACRES'
		},
		ag9Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AG9_ACRES'
		},
		wd1Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD1_ACRES'
		},
		wd2Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD2_ACRES'
		},
		wd3Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD3_ACRES'
		},
		wd4Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD4_ACRES'
		},
		wd5Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD5_ACRES'
		},
		wd6Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD6_ACRES'
		},
		wd7Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD7_ACRES'
		},
		wd8Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD8_ACRES'
		},
		wd9Acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'WD9_ACRES'
		},
		createdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'CREATEDATE'
		}
	}, {
		tableName: 'DOR_CUV',
		timestamps: false
	});
};
