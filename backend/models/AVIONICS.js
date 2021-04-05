/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('avionics', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		avkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'AVKEY'
		},
		airkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'AIRCRAFT',
				key: 'AIRKEY'
			},
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
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAV'
		}
	}, {
		tableName: 'AVIONICS',
		timestamps: false
	});
};
