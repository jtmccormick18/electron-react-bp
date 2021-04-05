/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mobmfgta', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		mobmfg: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'MOBMFG'
		},
		mobmodel: {
			type: DataTypes.CHAR,
			allowNull: false,
			field: 'MOBMODEL'
		},
		mobclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOBCLASS'
		},
		moblife: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBLIFE'
		}
	}, {
		tableName: 'MOBMFGTA',
		timestamps: false
	});
};
