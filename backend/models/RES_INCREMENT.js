/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resIncrement', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		area: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'AREA'
		},
		incBase: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'INC_BASE'
		},
		incFactor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'INC_FACTOR'
		}
	}, {
		tableName: 'RES_INCREMENT',
		timestamps: false
	});
};
