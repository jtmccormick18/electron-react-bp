/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ratio', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		salekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'SALEKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'REALKEY'
		},
		grantee: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GRANTEE'
		},
		grantor: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GRANTOR'
		},
		saledate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SALEDATE'
		},
		deedpage: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DEEDPAGE'
		},
		plotpage: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PLOTPAGE'
		},
		saleclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALECLASS'
		},
		strat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'STRAT'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		qualifier: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUALIFIER'
		},
		mktval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'MKTVAL'
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENT'
		},
		ptd: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PTD'
		},
		currVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'CURR_VAL'
		},
		ratio: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'RATIO'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		neighbhood: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEIGHBHOOD'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TOTALACRES'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		netSp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'NET_SP'
		},
		userid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'USERID'
		},
		acc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'ACC'
		},
		desire: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESIRE'
		},
		netSpOrg: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'NET_SP_ORG'
		},
		trendDays: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TREND_DAYS'
		},
		trendAmt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'TREND_AMT'
		},
		saleprice: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALEPRICE'
		},
		salesadj: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SALESADJ'
		},
		fmv: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'FMV'
		}
	}, {
		tableName: 'RATIO',
		timestamps: false
	});
};
