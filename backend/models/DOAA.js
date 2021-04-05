/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doaa', {
		coname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CONAME'
		},
		reporttype: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REPORTTYPE'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
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
		digclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGCLASS'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TOTALACRES'
		},
		currVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'CURR_VAL'
		},
		sb346: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'SB346'
		},
		saledate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SALEDATE'
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
		netSp: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'NET_SP'
		},
		reasoncode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASONCODE'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		commentsReal: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS_REAL'
		},
		commentsSale: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS_SALE'
		},
		reportnum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REPORTNUM'
		}
	}, {
		tableName: 'DOAA',
		timestamps: false
	});
};
