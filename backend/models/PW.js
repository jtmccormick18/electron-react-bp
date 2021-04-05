/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pw', {
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
		engmake: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENGMAKE'
		},
		engdisp: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENGDISP'
		},
		engrpm: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENGRPM'
		},
		drive: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DRIVE'
		},
		ovlength: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OVLENGTH'
		},
		ovwidth: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OVWIDTH'
		},
		hull: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL'
		},
		weight: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WEIGHT'
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
		tableName: 'PW',
		timestamps: false
	});
};
