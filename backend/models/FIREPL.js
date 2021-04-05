/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('firepl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		firekey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'FIREKEY'
		},
		repropkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REPROPKEY'
		},
		itemNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ITEM_NO'
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NUMBER'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		}
	}, {
		tableName: 'FIREPL',
		timestamps: false
	});
};
