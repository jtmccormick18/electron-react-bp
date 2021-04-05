/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('delFirepl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		firekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
		},
		adddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ADDDATE'
		}
	}, {
		tableName: 'DEL_FIREPL',
		timestamps: false
	});
};
