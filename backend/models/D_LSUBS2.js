/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dLsubs2', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		landkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LANDKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		conmaikey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CONMAIKEY'
		},
		subType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUB_TYPE'
		},
		acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ACRES'
		},
		pref: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'PREF'
		},
		statehsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'STATEHSFLG'
		},
		rurvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'RURVALUE'
		}
	}, {
		tableName: 'D_LSUBS2',
		timestamps: false
	});
};
