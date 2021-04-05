/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hsModule', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		hskey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'HSKEY'
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
		homephone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEPHONE'
		},
		workphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WORKPHONE'
		},
		faxnumber: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FAXNUMBER'
		},
		fei: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FEI'
		},
		ssn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SSN'
		},
		ssn1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SSN1'
		},
		sst: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SST'
		},
		entityType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENTITY_TYPE'
		},
		birthdate1: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'BIRTHDATE1'
		},
		birthdate2: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'BIRTHDATE2'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EXISTS'
		},
		createdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATEDATE'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EMAIL'
		},
		cellphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CELLPHONE'
		},
		country: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COUNTRY'
		},
		siteaddid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SITEADDID'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		hsyear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HSYEAR'
		},
		applicationDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APPLICATION_DATE'
		},
		approvalDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'APPROVAL_DATE'
		},
		denialDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DENIAL_DATE'
		},
		receivedBy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RECEIVED_BY'
		},
		filingType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FILING_TYPE'
		},
		mvInCounty: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MV_IN_COUNTY'
		}
	}, {
		tableName: 'HS_MODULE',
		timestamps: false
	});
};
