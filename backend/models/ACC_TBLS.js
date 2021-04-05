/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accTbls', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		rescomm: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RESCOMM'
		},
		tableref: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TABLEREF'
		},
		dim1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIM1'
		},
		dim2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIM2'
		},
		points: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'POINTS'
		}
	}, {
		tableName: 'ACC_TBLS',
		timestamps: false
	});
};
