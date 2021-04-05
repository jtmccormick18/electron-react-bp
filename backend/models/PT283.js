/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pt283', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		pt283Key: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'PT283KEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		saleType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALE_TYPE'
		},
		quarter: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QUARTER'
		},
		saleyear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALEYEAR'
		},
		formnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FORMNUM'
		},
		tracknum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TRACKNUM'
		},
		loname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LONAME'
		},
		loadd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOADD1'
		},
		loadd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOADD2'
		},
		loadd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOADD3'
		},
		locsz: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOCSZ'
		},
		purname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PURNAME'
		},
		puradd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PURADD1'
		},
		puradd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PURADD2'
		},
		puradd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PURADD3'
		},
		purcsz: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PURCSZ'
		},
		location: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOCATION'
		},
		county: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COUNTY'
		},
		city: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CITY'
		},
		acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACRES'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		digestname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGESTNAME'
		},
		pulp: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PULP'
		},
		chip: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CHIP'
		},
		saw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SAW'
		},
		poles: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'POLES'
		},
		post: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'POST'
		},
		fuel: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FUEL'
		},
		fire: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FIRE'
		},
		pulphard: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PULPHARD'
		},
		sawhard: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SAWHARD'
		},
		posthard: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'POSTHARD'
		},
		fuelhard: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FUELHARD'
		},
		firehard: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FIREHARD'
		},
		paid: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PAID'
		},
		millage: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MILLAGE'
		},
		taxdue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXDUE'
		},
		tapaid: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAPAID'
		},
		tamill: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAMILL'
		},
		tataxdue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TATAXDUE'
		},
		saledate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'SALEDATE'
		},
		recddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'RECDDATE'
		},
		paiddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'PAIDDATE'
		},
		taxdist: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDIST'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		}
	}, {
		tableName: 'PT283',
		timestamps: false
	});
};
