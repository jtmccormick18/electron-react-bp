/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salesQtp', {
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		coname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CONAME'
		},
		conum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONUM'
		},
		salekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SALEKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		grantee: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'GRANTEE'
		},
		grantor: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'GRANTOR'
		},
		saledate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'SALEDATE'
		},
		deedpage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DEEDPAGE'
		},
		plotpage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PLOTPAGE'
		},
		saleprice: {
			type: DataTypes.BIGINT,
			allowNull: true,
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
			field: 'EXISTS'
		},
		pt61Num: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PT61_NUM'
		},
		rett: {
			type: DataTypes.DOUBLE,
			allowNull: true,
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
			field: 'SALESADJ'
		},
		netSp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'NET_SP'
		},
		mavval: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'MAVVAL'
		},
		digestVal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'DIGEST_VAL'
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
		},
		q1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'Q1'
		},
		q2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'Q2'
		},
		q3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'Q3'
		},
		q4: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'Q4'
		},
		dorcomment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DORCOMMENT'
		}
	}, {
		tableName: 'SALES_QTP',
		timestamps: false
	});
};
