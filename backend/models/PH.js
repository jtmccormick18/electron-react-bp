/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ph', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		abosYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ABOS_YEAR'
		},
		brand: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BRAND'
		},
		year: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MODEL'
		},
		modtype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODTYPE'
		},
		beamlength: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BEAMLENGTH'
		},
		material: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MATERIAL'
		},
		pontlenwid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PONTLENWID'
		},
		hull: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL'
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WEIGHT'
		},
		outhp: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OUTHP'
		},
		inhp: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INHP'
		},
		feet: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FEET'
		},
		inch: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INCH'
		},
		srp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SRP'
		},
		low: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LOW'
		},
		high: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HIGH'
		},
		retail: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RETAIL'
		},
		controlno: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'CONTROLNO'
		}
	}, {
		tableName: 'PH',
		timestamps: false
	});
};
