/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('transferLog', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		proptype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROPTYPE'
		},
		propitem: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROPITEM'
		},
		desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESC'
		},
		transDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'TRANS_DATE'
		},
		transTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TRANS_TIME'
		}
	}, {
		tableName: 'TRANSFER_LOG',
		timestamps: false
	});
};
