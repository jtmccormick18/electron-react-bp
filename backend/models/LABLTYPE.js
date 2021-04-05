/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('labltype', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		labeltype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'LABELTYPE'
		},
		linestyle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LINESTYLE'
		},
		vostyle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VOSTYLE'
		},
		thickness: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'THICKNESS'
		},
		colorstyle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COLORSTYLE'
		},
		red: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RED'
		},
		green: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'GREEN'
		},
		blue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BLUE'
		}
	}, {
		tableName: 'LABLTYPE',
		timestamps: false
	});
};
