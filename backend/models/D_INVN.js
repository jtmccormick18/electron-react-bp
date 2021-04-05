/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dInvn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PERSKEY'
		},
		invnkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'INVNKEY'
		},
		grossRaw: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'GROSS_RAW'
		},
		grossMfg: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'GROSS_MFG'
		},
		grossOut: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'GROSS_OUT'
		},
		netRaw: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'NET_RAW'
		},
		netMfg: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'NET_MFG'
		},
		netOut: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'NET_OUT'
		},
		totalGrs: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TOTAL_GRS'
		},
		totalNet: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TOTAL_NET'
		},
		totalInvn: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TOTAL_INVN'
		},
		frexmptpct: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FREXMPTPCT'
		},
		livestock: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'LIVESTOCK'
		},
		fsupply: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FSUPPLY'
		},
		frportdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'FRPORTDATE'
		},
		ciNetRaw: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CI_NET_RAW'
		},
		ciNetMfg: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CI_NET_MFG'
		},
		ciNetOut: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CI_NET_OUT'
		},
		mav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MAV'
		},
		mavgrs: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MAVGRS'
		},
		mavnet: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MAVNET'
		}
	}, {
		tableName: 'D_INVN',
		timestamps: false
	});
};
