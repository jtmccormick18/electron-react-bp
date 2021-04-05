/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('inedit', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		pkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'PKEY'
		},
		screen: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'SCREEN'
		},
		indate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'INDATE'
		},
		intime: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'INTIME'
		},
		loginid: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'LOGINID'
		}
	}, {
		tableName: 'INEDIT',
		timestamps: false
	});
};
