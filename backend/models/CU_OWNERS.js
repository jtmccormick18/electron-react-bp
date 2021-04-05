/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cuOwners', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		cuownkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'CUOWNKEY'
		},
		conmaikey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'CONMAI',
				key: 'CONMAIKEY'
			},
			field: 'CONMAIKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'REALPROP',
				key: 'REALKEY'
			},
			field: 'REALKEY'
		},
		lastname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LASTNAME'
		},
		firstname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FIRSTNAME'
		},
		middle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MIDDLE'
		},
		ownPct: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OWN_PCT'
		},
		pinAcres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PIN_ACRES'
		},
		covAcres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COV_ACRES'
		},
		cuId: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CU_ID'
		}
	}, {
		tableName: 'CU_OWNERS',
		timestamps: false
	});
};
