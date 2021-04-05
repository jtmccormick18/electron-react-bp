/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dTaxmaster', {
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
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
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
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TOTALACRES'
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
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		houseNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
		covyr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COVYR'
		},
		millage: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MILLAGE'
		},
		returnVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETURN_VAL'
		},
		esttax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ESTTAX'
		},
		prevVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PREV_VAL'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CURR_VAL'
		},
		otherVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'OTHER_VAL'
		},
		covcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COVCODE'
		}
	}, {
		tableName: 'D_TAXMASTER',
		timestamps: false
	});
};
