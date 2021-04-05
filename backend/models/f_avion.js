/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fAvion', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		avkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AVKEY'
		},
		airkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AIRKEY'
		},
		yearbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEARBUILT'
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COST'
		},
		desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESC'
		},
		purdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'PURDATE'
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VALUE'
		}
	}, {
		tableName: 'f_avion',
		timestamps: false
	});
};
