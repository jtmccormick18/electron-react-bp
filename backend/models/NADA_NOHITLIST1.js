/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaNohitlist1', {
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'MOBILEKEY'
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
		width: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'WIDTH'
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LENGTH'
		},
		guide: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'GUIDE'
		}
	}, {
		tableName: 'NADA_NOHITLIST1',
		timestamps: false
	});
};
