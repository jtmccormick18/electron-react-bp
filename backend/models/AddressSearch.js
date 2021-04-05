/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('addressSearch', {
		proptype: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PROPTYPE'
		},
		pkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PKEY'
		},
		houseNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'HOUSE_NO'
		},
		extension: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXTENSION'
		},
		stdirect: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STDIRECT'
		},
		streetNam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STREET_NAM'
		},
		sttype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STTYPE'
		},
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'OWNKEY'
		},
		mobtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MOBTYPE'
		}
	}, {
		tableName: 'AddressSearch',
		timestamps: false
	});
};
