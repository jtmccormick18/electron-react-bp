/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaTipout', {
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
			allowNull: false,
			primaryKey: true,
			field: 'BEGINCHART'
		},
		endchart: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ENDCHART'
		},
		new: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NEW'
		},
		yrs1To2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YRS1TO2'
		},
		yrs3To4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YRS3TO4'
		},
		yrs5Plus: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YRS5_PLUS'
		}
	}, {
		tableName: 'NADA_TIPOUT',
		timestamps: false
	});
};
