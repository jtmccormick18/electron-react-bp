/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('om', {
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
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		serial: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SERIAL'
		},
		hp: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HP'
		},
		rpm: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RPM'
		},
		cyl: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CYL'
		},
		borestroke: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BORESTROKE'
		},
		pist: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PIST'
		},
		starter: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STARTER'
		},
		weight: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WEIGHT'
		},
		saltwater: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALTWATER'
		},
		srp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SRP'
		},
		fwlow: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FWLOW'
		},
		fwhigh: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FWHIGH'
		},
		retail: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RETAIL'
		},
		swlow: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWLOW'
		},
		swhigh: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWHIGH'
		},
		swretail: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SWRETAIL'
		},
		controlno: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'CONTROLNO'
		}
	}, {
		tableName: 'OM',
		timestamps: false
	});
};
