/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dOwner', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
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
		rpflag: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RPFLAG'
		},
		noRelease: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'NO_RELEASE'
		},
		taxreturn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXRETURN'
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
		tableName: 'D_OWNER',
		timestamps: false
	});
};
