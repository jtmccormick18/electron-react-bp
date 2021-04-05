/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subdivis', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		subdivcode: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'SUBDIVCODE'
		},
		subdivname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUBDIVNAME'
		},
		calcmethod: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CALCMETHOD'
		},
		unitvalue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'UNITVALUE'
		},
		exunits: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXUNITS'
		},
		exfactor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXFACTOR'
		},
		depthtbl: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEPTHTBL'
		}
	}, {
		tableName: 'SUBDIVIS',
		timestamps: false
	});
};
