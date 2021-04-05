/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaSvsCategory', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		nadaYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NADA_YEAR'
		},
		quality: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUALITY'
		},
		category: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CATEGORY'
		},
		svsPage: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SVS_PAGE'
		},
		numid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NUMID'
		}
	}, {
		tableName: 'NADA_SVS_CATEGORY',
		timestamps: false
	});
};
