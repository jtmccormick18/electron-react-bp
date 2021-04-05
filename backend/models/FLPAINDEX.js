/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('flpaindex', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		flyear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLYEAR'
		},
		flindex: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLINDEX'
		}
	}, {
		tableName: 'FLPAINDEX',
		timestamps: false
	});
};
