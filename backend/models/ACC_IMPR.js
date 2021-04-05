/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accImpr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		sqFtTo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SQ_FT_TO'
		},
		sqFtFrom: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SQ_FT_FROM'
		},
		pointsPsf: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'POINTS_PSF'
		},
		baseSize: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BASE_SIZE'
		}
	}, {
		tableName: 'ACC_IMPR',
		timestamps: false
	});
};
