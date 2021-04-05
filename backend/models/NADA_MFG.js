/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaMfg', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		nadaYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NADA_YEAR'
		},
		mfgid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'MFGID'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		}
	}, {
		tableName: 'NADA_MFG',
		timestamps: false
	});
};
