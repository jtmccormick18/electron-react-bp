/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fieldedits', {
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
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PKEY'
		},
		chgappr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CHGAPPR'
		},
		editdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'EDITDATE'
		},
		edittime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EDITTIME'
		},
		beforevalue: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'BEFOREVALUE'
		},
		control: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONTROL'
		},
		aftervalue: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'AFTERVALUE'
		}
	}, {
		tableName: 'FIELDEDITS',
		timestamps: false
	});
};
