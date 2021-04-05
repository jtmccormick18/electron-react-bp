/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('taxtype', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		taxtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXTYPE'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		entity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ENTITY'
		},
		asmtpct: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ASMTPCT'
		}
	}, {
		tableName: 'TAXTYPE',
		timestamps: false
	});
};
