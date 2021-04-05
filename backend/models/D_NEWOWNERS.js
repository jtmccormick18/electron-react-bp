/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dNewowners', {
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
			field: 'REALKEY'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
		prevLastname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_LASTNAME'
		},
		prevFirstname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_FIRSTNAME'
		},
		prevMiddle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_MIDDLE'
		},
		prevAdd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_ADD1'
		},
		prevAdd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_ADD2'
		},
		prevAdd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_ADD3'
		},
		prevCity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_CITY'
		},
		prevState: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_STATE'
		},
		prevZip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PREV_ZIP'
		},
		futLastname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_LASTNAME'
		},
		futFirstname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_FIRSTNAME'
		},
		futMiddle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_MIDDLE'
		},
		futAdd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_ADD1'
		},
		futAdd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_ADD2'
		},
		futAdd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_ADD3'
		},
		futCity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_CITY'
		},
		futState: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_STATE'
		},
		futZip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUT_ZIP'
		}
	}, {
		tableName: 'D_NEWOWNERS',
		timestamps: false
	});
};
