/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('delSaleinfo', {
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
			defaultValue: '((0))',
			field: 'SALEKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			type: DataTypes.DATEONLY,
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
		saleprice: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALEPRICE'
		},
		saleclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALECLASS'
		},
		strat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
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
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		pt61Num: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PT61_NUM'
		},
		rett: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RETT'
		},
		instrument: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INSTRUMENT'
		},
		salesadj: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SALESADJ'
		},
		netSp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NET_SP'
		},
		mavval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVVAL'
		},
		digestVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'DIGEST_VAL'
		},
		adddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ADDDATE'
		},
		surveysent: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SURVEYSENT'
		},
		surveyreceived: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SURVEYRECEIVED'
		},
		saleacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SALEACRES'
		}
	}, {
		tableName: 'DEL_SALEINFO',
		timestamps: false
	});
};
