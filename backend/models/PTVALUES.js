/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ptvalues', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		harvestYr: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'HARVEST_YR'
		},
		swpw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWPW'
		},
		swcs: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWCS'
		},
		swst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWST'
		},
		swpl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWPL'
		},
		swpo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWPO'
		},
		swfc: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWFC'
		},
		hwpw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HWPW'
		},
		hwst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HWST'
		},
		hwfw: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HWFW'
		}
	}, {
		tableName: 'PTVALUES',
		timestamps: false
	});
};
