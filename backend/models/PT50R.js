/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pt50R', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIGYR'
		},
		retndate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'RETNDATE'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		covyr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COVYR'
		},
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
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
		phone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PHONE'
		},
		acres1: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACRES1'
		},
		landcs1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDCS1'
		},
		landval1: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LANDVAL1'
		},
		acres2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACRES2'
		},
		landcs2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDCS2'
		},
		landval2: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LANDVAL2'
		},
		impcs1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPCS1'
		},
		impval1: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVAL1'
		},
		impcs2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPCS2'
		},
		impval2: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVAL2'
		},
		impcs3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPCS3'
		},
		impval3: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVAL3'
		},
		impcs4: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPCS4'
		},
		impval4: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVAL4'
		},
		impcs5: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPCS5'
		},
		impval5: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVAL5'
		},
		impcs6: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPCS6'
		},
		impval6: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVAL6'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTALACRES'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURR_VAL'
		},
		printdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'PRINTDATE'
		}
	}, {
		tableName: 'PT50R',
		timestamps: false
	});
};
