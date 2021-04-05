/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sb', {
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
		rigging: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RIGGING'
		},
		hull: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL'
		},
		waterline: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WATERLINE'
		},
		beam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BEAM'
		},
		draft: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DRAFT'
		},
		displace: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DISPLACE'
		},
		sailarea: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SAILAREA'
		},
		hpfuel: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HPFUEL'
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
		tableName: 'SB',
		timestamps: false
	});
};
