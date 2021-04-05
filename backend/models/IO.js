/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('io', {
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
		draft: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DRAFT'
		},
		boattype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOATTYPE'
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WEIGHT'
		},
		hp: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HP'
		},
		hull: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL'
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
		beamfeet: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BEAMFEET'
		},
		beaminch: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BEAMINCH'
		},
		eng: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENG'
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
		tableName: 'IO',
		timestamps: false
	});
};
