/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fAvionPrn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		avkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'AVKEY'
		},
		airkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
			field: 'EXISTS'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAV'
		}
	}, {
		tableName: 'F_AVION_PRN',
		timestamps: false
	});
};
