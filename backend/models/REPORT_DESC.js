/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reportDesc', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		rptid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RPTID'
		},
		desc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESC'
		}
	}, {
		tableName: 'REPORT_DESC',
		timestamps: false
	});
};
