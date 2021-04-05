/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('newowner', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		newkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NEWKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'REALPROP',
				key: 'REALKEY'
			},
			field: 'REALKEY'
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
		multiowner: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MULTIOWNER'
		},
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		datenow: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATENOW'
		},
		homeexempt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEEXEMPT'
		},
		homedate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'HOMEDATE'
		},
		assessRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ASSESS_RSN'
		},
		transfer: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'TRANSFER'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		}
	}, {
		tableName: 'NEWOWNER',
		timestamps: false
	});
};
