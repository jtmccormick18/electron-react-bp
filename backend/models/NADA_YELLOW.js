/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaYellow', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		nadaYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NADA_YEAR'
		},
		chartno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'CHARTNO'
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'WIDTH'
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'LENGTH'
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PRICE'
		}
	}, {
		tableName: 'NADA_YELLOW',
		timestamps: false
	});
};
