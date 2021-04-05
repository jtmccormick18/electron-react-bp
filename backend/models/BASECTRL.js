/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('basectrl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		itemtype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'ITEMTYPE'
		},
		item: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'ITEM'
		},
		itemNo: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'ITEM_NO'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		lumpsum: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LUMPSUM'
		},
		sqft: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SQFT'
		},
		adjfact: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ADJFACT'
		},
		areafact: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AREAFACT'
		}
	}, {
		tableName: 'BASECTRL',
		timestamps: false
	});
};
