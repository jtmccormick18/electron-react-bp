/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaModifiers', {
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
		beginchart: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BEGINCHART'
		},
		endchart: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ENDCHART'
		},
		condition: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'CONDITION'
		},
		modifier: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MODIFIER'
		},
		remLife: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REM_LIFE'
		},
		sortorder: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SORTORDER'
		}
	}, {
		tableName: 'NADA_MODIFIERS',
		timestamps: false
	});
};
