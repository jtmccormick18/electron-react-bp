/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('covreg', {
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
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		},
		covacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'COVACRES'
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
		},
		mo1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MO1'
		},
		mo2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MO2'
		},
		mo3: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MO3'
		},
		mo4: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MO4'
		},
		mo5: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MO5'
		},
		mo6: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MO6'
		},
		ccy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CCY'
		},
		flcy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLCY'
		}
	}, {
		tableName: 'COVREG',
		timestamps: false
	});
};
