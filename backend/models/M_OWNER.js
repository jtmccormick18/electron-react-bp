/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mOwner', {
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
		taxreturn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXRETURN'
		},
		acctstatus: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ACCTSTATUS'
		},
		birthdate1: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'BIRTHDATE1'
		},
		birthdate2: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'BIRTHDATE2'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		noRelease: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'NO_RELEASE'
		},
		createdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'CREATEDATE'
		},
		email: {
			type: DataTypes.CHAR,
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
		}
	}, {
		tableName: 'M_OWNER',
		timestamps: false
	});
};
