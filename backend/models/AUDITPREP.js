/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('auditprep', {
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OWNKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.CHAR,
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
		streetNam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STREET_NAM'
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
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'LANDVALUE'
		},
		bldgcodes: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'BLDGCODES'
		},
		bldgvalue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'BLDGVALUE'
		},
		totalvalue: {
			type: DataTypes.DOUBLE,
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
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALEDATE'
		},
		mh: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'MH'
		},
		landmav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LANDMAV'
		},
		bldgmav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BLDGMAV'
		},
		totalmav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TOTALMAV'
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FULLNAME'
		}
	}, {
		tableName: 'AUDITPREP',
		timestamps: false
	});
};
