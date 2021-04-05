/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('delInvn', {
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
		merchandis: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MERCHANDIS'
		},
		rawMater: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RAW_MATER'
		},
		process: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PROCESS'
		},
		finished: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FINISHED'
		},
		transit: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TRANSIT'
		},
		warehouse: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'WAREHOUSE'
		},
		consigned: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CONSIGNED'
		},
		floorPlan: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FLOOR_PLAN'
		},
		sparePart: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'SPARE_PART'
		},
		packing: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'PACKING'
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
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
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
		mavorig: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MAVORIG'
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
		},
		adddate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ADDDATE'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ABATE_EX'
		},
		grossFulfill: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'GROSS_FULFILL'
		},
		grossRetail2: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'GROSS_RETAIL2'
		},
		fulfillNet: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FULFILL_NET'
		},
		retail2Net: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETAIL2_NET'
		},
		fulfillNetCity: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'FULFILL_NET_CITY'
		},
		retail2NetCity: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RETAIL2_NET_CITY'
		},
		unabatedval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'UNABATEDVAL'
		},
		unabatedvalFp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'UNABATEDVAL_FP'
		}
	}, {
		tableName: 'DEL_INVN',
		timestamps: false
	});
};
