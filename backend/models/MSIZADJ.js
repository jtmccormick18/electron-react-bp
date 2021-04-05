/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('msizadj', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		mobwidth: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'MOBWIDTH'
		},
		moblength: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'MOBLENGTH'
		},
		mobclass: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'MOBCLASS'
		},
		mobprice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBPRICE'
		}
	}, {
		tableName: 'MSIZADJ',
		timestamps: false
	});
};
