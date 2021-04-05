/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('auditLetters', {
		sortorder: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'SORTORDER'
		},
		menutext: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'MENUTEXT'
		},
		rdlname: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'RDLNAME'
		}
	}, {
		tableName: 'AUDIT_LETTERS',
		timestamps: false
	});
};
