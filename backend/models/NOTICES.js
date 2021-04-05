/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notices', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OWNKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBILEKEY'
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
		assessRsn: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ASSESS_RSN'
		},
		reason: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REASON'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURR_VAL'
		},
		prevVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PREV_VAL'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTALACRES'
		},
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		homeexempt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEEXEMPT'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		anprint: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ANPRINT'
		},
		andate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ANDATE'
		},
		prevassmnt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PREVASSMNT'
		},
		currassmnt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURRASSMNT'
		},
		taxyear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXYEAR'
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
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mavcurr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVCURR'
		},
		mavprev: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVPREV'
		}
	}, {
		tableName: 'NOTICES',
		timestamps: false
	});
};
