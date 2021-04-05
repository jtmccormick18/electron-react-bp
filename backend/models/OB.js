/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ob', {
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
		boattype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOATTYPE'
		},
		beam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BEAM'
		},
		weight: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WEIGHT'
		},
		transhght: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TRANSHGHT'
		},
		hp: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HP'
		},
		material: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MATERIAL'
		},
		loadcap: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOADCAP'
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
		motor: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR'
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
		tableName: 'OB',
		timestamps: false
	});
};
