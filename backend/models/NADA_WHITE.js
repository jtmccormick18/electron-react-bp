/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nadaWhite', {
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
		mfgid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MFGID'
		},
		modelid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MODELID'
		},
		region: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REGION'
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WIDTH'
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
		},
		svsPage: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SVS_PAGE'
		}
	}, {
		tableName: 'NADA_WHITE',
		timestamps: false
	});
};
