/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('depr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		bldgtype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'BLDGTYPE'
		},
		grade: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			primaryKey: true,
			field: 'GRADE'
		},
		frame: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'FRAME'
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'AGE'
		},
		ex: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EX'
		},
		gd: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'GD'
		},
		av: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AV'
		},
		fr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FR'
		},
		pr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PR'
		},
		y5: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y5'
		},
		y10: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y10'
		},
		y15: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y15'
		},
		y20: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y20'
		},
		y25: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y25'
		},
		y30: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y30'
		},
		y35: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y35'
		},
		y40: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y40'
		},
		y45: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y45'
		},
		y50: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y50'
		},
		y55: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y55'
		},
		y60: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y60'
		},
		y65: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y65'
		},
		y70: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y70'
		},
		y75: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'Y75'
		}
	}, {
		tableName: 'DEPR',
		timestamps: false
	});
};
