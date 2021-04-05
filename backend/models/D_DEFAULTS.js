/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dDefaults', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DIGYR'
		}
	}, {
		tableName: 'D_DEFAULTS',
		timestamps: false
	});
};
