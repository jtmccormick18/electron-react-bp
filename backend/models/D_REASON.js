/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dReason', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		proptype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROPTYPE'
		},
		reasontype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASONTYPE'
		},
		reasoncode: {
			type: DataTypes.CHAR,
			allowNull: true,
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
		}
	}, {
		tableName: 'D_REASON',
		timestamps: false
	});
};
