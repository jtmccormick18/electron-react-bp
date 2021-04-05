/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('busiType', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		typekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TYPEKEY'
		},
		busiType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_TYPE'
		}
	}, {
		tableName: 'BUSI_TYPE',
		timestamps: false
	});
};
