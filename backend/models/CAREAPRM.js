/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('careaprm', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		bldgType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BLDG_TYPE'
		},
		areaovrper: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AREAOVRPER'
		},
		apfactor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'APFACTOR'
		}
	}, {
		tableName: 'CAREAPRM',
		timestamps: false
	});
};
