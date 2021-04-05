/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('depthtbl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		depth: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'DEPTH'
		},
		dfact100: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DFACT100'
		},
		dfact150: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DFACT150'
		},
		dfact200: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DFACT200'
		},
		dfact250: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DFACT250'
		},
		dfact300: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DFACT300'
		}
	}, {
		tableName: 'DEPTHTBL',
		timestamps: false
	});
};
