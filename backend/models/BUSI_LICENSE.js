/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('busiLicense', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		busikey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BUSIKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		coIdNum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CO_ID_NUM'
		},
		busiId: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ID'
		},
		busiAdd1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ADD1'
		},
		busiAdd2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ADD2'
		},
		busiAdd3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ADD3'
		},
		busiCity: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_CITY'
		},
		busiState: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_STATE'
		},
		busiZip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_ZIP'
		},
		busiPhone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_PHONE'
		},
		sst: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SST'
		},
		stNum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ST_NUM'
		},
		stExt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_EXT'
		},
		stDirect: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_DIRECT'
		},
		stName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_NAME'
		},
		stType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_TYPE'
		},
		stUnit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_UNIT'
		},
		quad: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUAD'
		},
		stZip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ST_ZIP'
		},
		lastname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LASTNAME'
		},
		firstname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FIRSTNAME'
		},
		middle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MIDDLE'
		},
		address1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS1'
		},
		address2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS2'
		},
		address3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS3'
		},
		city: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CITY'
		},
		state: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATE'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZIP'
		},
		homphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMPHONE'
		},
		ssn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SSN'
		},
		accountant: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ACCOUNTANT'
		},
		contact: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONTACT'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EMAIL'
		},
		renewal: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RENEWAL'
		},
		typekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TYPEKEY'
		},
		busiType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_TYPE'
		},
		naics: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAICS'
		},
		acctstatus: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ACCTSTATUS'
		},
		busiFee: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BUSI_FEE'
		},
		createdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'CREATEDATE'
		},
		issuedate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ISSUEDATE'
		},
		paiddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'PAIDDATE'
		},
		employees: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EMPLOYEES'
		},
		lateFee: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LATE_FEE'
		},
		issuedby: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ISSUEDBY'
		},
		expiredate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'EXPIREDATE'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		busiLicno: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BUSI_LICNO'
		}
	}, {
		tableName: 'BUSI_LICENSE',
		timestamps: false
	});
};
