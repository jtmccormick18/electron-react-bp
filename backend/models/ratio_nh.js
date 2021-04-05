/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ratioNh', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		neigh: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEIGH'
		},
		descripton: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIPTON'
		},
		med: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MED'
		},
		medLci: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MED_LCI'
		},
		medUci: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MED_UCI'
		},
		agg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AGG'
		},
		aggLci: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AGG_LCI'
		},
		aggUci: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AGG_UCI'
		},
		cod: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COD'
		},
		prd: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PRD'
		},
		numSamp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NUM_SAMP'
		},
		lowest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LOWEST'
		},
		highest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HIGHEST'
		},
		minSamp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MIN_SAMP'
		},
		stddev: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'STDDEV'
		},
		nhAdj: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NH_ADJ'
		},
		userid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'USERID'
		}
	}, {
		tableName: 'ratio_nh',
		timestamps: false
	});
};
