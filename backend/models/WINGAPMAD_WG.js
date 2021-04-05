/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wingapmadWg', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		siteaddid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SITEADDID'
		},
		siteaddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SITEADDRESS'
		},
		pin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PIN'
		},
		houseNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HOUSE_NO'
		},
		extension: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EXTENSION'
		},
		stdirect: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STDIRECT'
		},
		streetNam: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STREET_NAM'
		},
		sttype: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STTYPE'
		},
		quad: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'QUAD'
		},
		units: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'UNITS'
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ZIP'
		},
		source: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SOURCE'
		}
	}, {
		tableName: 'WINGAPMAD_WG',
		timestamps: false
	});
};
