/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dAsmrsn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PERSKEY'
		},
		pin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PIN'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		noticedate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'NOTICEDATE'
		},
		reasoncode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASONCODE'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EXISTS'
		},
		coaType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COA_TYPE'
		}
	}, {
		tableName: 'D_ASMRSN',
		timestamps: false
	});
};
