/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaNohitlist2', {
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'mobilekey'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		yearbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEARBUILT'
		},
		effyrbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EFFYRBUILT'
		},
		lookupWidth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LOOKUP_WIDTH'
		},
		lookupLength: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LOOKUP_LENGTH'
		},
		adjprice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ADJPRICE'
		}
	}, {
		tableName: 'NADA_NOHITLIST2',
		timestamps: false
	});
};
