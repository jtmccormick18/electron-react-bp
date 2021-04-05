/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reason', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		proptype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'PROPTYPE'
		},
		reasontype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'REASONTYPE'
		},
		reasoncode: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'REASONCODE'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		assmtlst: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ASSMTLST'
		},
		coaType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COA_TYPE'
		},
		digestVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'DIGEST_VAL'
		}
	}, {
		tableName: 'REASON',
		timestamps: false
	});
};
