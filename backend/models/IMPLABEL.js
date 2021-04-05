/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('implabel', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		label: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'LABEL'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		sqft: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SQFT'
		},
		costfact: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COSTFACT'
		},
		areafact: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AREAFACT'
		},
		labeltype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LABELTYPE'
		},
		bldgtype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'BLDGTYPE'
		},
		valmethod: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VALMETHOD'
		},
		tableref: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TABLEREF'
		},
		compNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COMP_NO'
		},
		isbasement: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ISBASEMENT'
		}
	}, {
		tableName: 'IMPLABEL',
		timestamps: false
	});
};
