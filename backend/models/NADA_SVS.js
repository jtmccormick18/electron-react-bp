/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaSvs', {
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
		quality: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'QUALITY'
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'WIDTH'
		},
		new: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NEW'
		},
		yr0: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR0'
		},
		yr1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR1'
		},
		yr2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR2'
		},
		yr3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR3'
		},
		yr4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR4'
		},
		yr5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR5'
		},
		yr6: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR6'
		},
		yr7: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR7'
		},
		yr8: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR8'
		},
		yr9: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR9'
		},
		yr10: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR10'
		},
		yr11: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR11'
		},
		yr12: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR12'
		},
		yr13: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR13'
		}
	}, {
		tableName: 'NADA_SVS',
		timestamps: false
	});
};
