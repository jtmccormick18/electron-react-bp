/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('agent', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		agentkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'AGENTKEY'
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
		workphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WORKPHONE'
		},
		createdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'CREATEDATE'
		},
		email: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EMAIL'
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
		tableName: 'AGENT',
		timestamps: false
	});
};
