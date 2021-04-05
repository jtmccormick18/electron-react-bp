/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lgsAudit', {
		fullname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FULLNAME'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OWNKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
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
		streetNam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STREET_NAM'
		},
		sttype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STTYPE'
		},
		unit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNIT'
		},
		quad: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUAD'
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
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		},
		landcodes: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LANDCODES'
		},
		landvalue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LANDVALUE'
		},
		bldgcodes: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'BLDGCODES'
		},
		bldgvalue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'BLDGVALUE'
		},
		totalvalue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'TOTALVALUE'
		},
		deedbook: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DEEDBOOK'
		},
		deedpage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DEEDPAGE'
		},
		saledate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SALEDATE'
		},
		mh: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MH'
		},
		landmav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'LANDMAV'
		},
		bldgmav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'BLDGMAV'
		},
		totalmav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'TOTALMAV'
		},
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		conum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONUM'
		}
	}, {
		tableName: 'LGS_AUDIT',
		timestamps: false
	});
};
