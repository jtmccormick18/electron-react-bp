/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commadds', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		bldgType: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'BLDG_TYPE'
		},
		menutype: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'MENUTYPE'
		},
		menurespon: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'MENURESPON'
		},
		qc1: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QC1'
		},
		qc2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QC2'
		},
		qc3: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QC3'
		},
		qc4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QC4'
		},
		qc5: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QC5'
		},
		descript: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIPT'
		}
	}, {
		tableName: 'COMMADDS',
		timestamps: false
	});
};
