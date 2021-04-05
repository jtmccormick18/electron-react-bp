/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('abosnohit', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		type: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TYPE'
		},
		accountNu: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCOUNT_NU'
		},
		boatkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOATKEY'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		year: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR'
		}
	}, {
		tableName: 'ABOSNOHIT',
		timestamps: false
	});
};
