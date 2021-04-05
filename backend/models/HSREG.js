/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hsreg', {
		coname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CONAME'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DIGYR'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		homeexempt: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HOMEEXEMPT'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		tdDesc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'TD_DESC'
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LASTNAME'
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FIRSTNAME'
		},
		middle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MIDDLE'
		},
		address1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS1'
		},
		address2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS2'
		},
		address3: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ADDRESS3'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CITY'
		},
		state: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATE'
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ZIP'
		}
	}, {
		tableName: 'HSREG',
		timestamps: false
	});
};
