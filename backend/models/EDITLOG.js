/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('editlog', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		filename: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FILENAME'
		},
		pkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PKEY'
		},
		chgappr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CHGAPPR'
		},
		editdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'EDITDATE'
		},
		edittime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EDITTIME'
		},
		editvalue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EDITVALUE'
		},
		valuetime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VALUETIME'
		},
		itemvalue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ITEMVALUE'
		}
	}, {
		tableName: 'EDITLOG',
		timestamps: false
	});
};
