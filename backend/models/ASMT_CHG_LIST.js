/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('asmtChgList', {
		conum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONUM'
		},
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		proptype: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'PROPTYPE'
		},
		acctno: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ACCTNO'
		},
		parcelNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		digclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGCLASS'
		},
		owner: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'OWNER'
		},
		prevAsmt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'PREV_ASMT'
		},
		currAsmt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'CURR_ASMT'
		},
		asmtDiff: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ASMT_DIFF'
		},
		reason: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'REASON'
		}
	}, {
		tableName: 'ASMT_CHG_LIST',
		timestamps: false
	});
};
