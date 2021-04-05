/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ovr299C', {
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
		ovrVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'OVR_VAL'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'REALKEY'
		},
		ovrdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'OVRDATE'
		},
		ovrRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OVR_RSN'
		},
		income: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INCOME'
		}
	}, {
		tableName: 'OVR299C',
		timestamps: false
	});
};
