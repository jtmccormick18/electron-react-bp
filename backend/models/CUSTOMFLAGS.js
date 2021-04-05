/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customflags', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
		},
		pin: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PIN'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		noticedate: {
			type: DataTypes.DATE,
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
			defaultValue: '0',
			field: 'EXISTS'
		},
		coaType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COA_TYPE'
		}
	}, {
		tableName: 'CUSTOMFLAGS',
		timestamps: false
	});
};
