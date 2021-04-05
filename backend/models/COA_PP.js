/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('coaPp', {
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
		coadd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COADD1'
		},
		coadd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COADD2'
		},
		coadd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COADD3'
		},
		cocity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COCITY'
		},
		costate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COSTATE'
		},
		cozip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COZIP'
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
		taxdist: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDIST'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
		},
		busiId: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ID'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		propDesc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PROP_DESC'
		},
		prevVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PREV_VAL'
		},
		returnVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETURN_VAL'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CURR_VAL'
		},
		prevAv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PREV_AV'
		},
		returnAv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETURN_AV'
		},
		currAv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CURR_AV'
		},
		maildate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'MAILDATE'
		},
		digyear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'DIGYEAR'
		},
		appealterm: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'APPEALTERM'
		},
		staff: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STAFF'
		},
		reasons: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REASONS'
		},
		coIdNum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CO_ID_NUM'
		},
		phone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PHONE'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'OWNKEY'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		anprint: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ANPRINT'
		},
		andate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ANDATE'
		},
		valChg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'VAL_CHG'
		},
		notice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'NOTICE'
		},
		propaddr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROPADDR'
		},
		mavcurr: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MAVCURR'
		},
		mavprev: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MAVPREV'
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
		esttax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ESTTAX'
		},
		otherVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'OTHER_VAL'
		},
		covcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COVCODE'
		},
		taxes: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TAXES'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		alternate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ALTERNATE'
		}
	}, {
		tableName: 'COA_PP',
		timestamps: false
	});
};
