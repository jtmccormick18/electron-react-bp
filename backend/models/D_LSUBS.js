/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dLsubs', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		landkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LANDKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		conmaikey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			defaultValue: '((0))',
			field: 'ACRES'
		},
		pref: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PREF'
		},
		statehsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'STATEHSFLG'
		}
	}, {
		tableName: 'D_LSUBS',
		timestamps: false
	});
};
