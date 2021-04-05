/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('street', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		stdirect: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STDIRECT'
		},
		sttype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STTYPE'
		},
		streetNam: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'STREET_NAM'
		}
	}, {
		tableName: 'STREET',
		timestamps: false
	});
};
