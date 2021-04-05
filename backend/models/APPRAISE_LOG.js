/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('appraiseLog', {
		reappraiseDate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REAPPRAISE_DATE'
		},
		proptype: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PROPTYPE'
		},
		reappraiseTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REAPPRAISE_TIME'
		},
		userid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'USERID'
		},
		dbname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DBNAME'
		},
		options: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'OPTIONS'
		}
	}, {
		tableName: 'APPRAISE_LOG',
		timestamps: false
	});
};
