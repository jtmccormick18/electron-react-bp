/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permits', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		permkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'PERMKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		jobaddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'JOBADDRESS'
		},
		permNum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PERM_NUM'
		},
		permType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PERM_TYPE'
		},
		permAmnt: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERM_AMNT'
		},
		squareFt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'SQUARE_FT'
		},
		fireplaces: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FIREPLACES'
		},
		dateIssue: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DATE_ISSUE'
		},
		issuedBy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ISSUED_BY'
		},
		dateInsp: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DATE_INSP'
		},
		dateSched: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DATE_SCHED'
		},
		dateCompl: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DATE_COMPL'
		},
		approvdBy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPROVD_BY'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		permyear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PERMYEAR'
		},
		permowner: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PERMOWNER'
		},
		phone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PHONE'
		},
		contact: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONTACT'
		},
		permcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PERMCODE'
		},
		workcost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'WORKCOST'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MOBILEKEY'
		},
		permitnumberEx: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PERMITNUMBER_EX'
		}
	}, {
		tableName: 'PERMITS',
		timestamps: false
	});
};
