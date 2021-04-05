/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dnrnew', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		gaReg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GA_REG'
		},
		certnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CERTNUM'
		},
		name: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAME'
		},
		lname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LNAME'
		},
		fname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FNAME'
		},
		middleinit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MIDDLEINIT'
		},
		suffix: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUFFIX'
		},
		street: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STREET'
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
		cnty: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CNTY'
		},
		birth: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BIRTH'
		},
		owner: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OWNER'
		},
		expire: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXPIRE'
		},
		process: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROCESS'
		},
		hullid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULLID'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		},
		length: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LENGTH'
		},
		year: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR'
		},
		class: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLASS'
		},
		toilet: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TOILET'
		},
		hull: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL'
		},
		propul: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PROPUL'
		},
		btuse: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BTUSE'
		},
		fuel: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FUEL'
		},
		boattype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOATTYPE'
		},
		statepr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATEPR'
		},
		stolen: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STOLEN'
		},
		cgdocno: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CGDOCNO'
		},
		transtype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TRANSTYPE'
		},
		dnrstatus: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DNRSTATUS'
		},
		reason: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'REASON'
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENT'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		taxcls: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXCLS'
		},
		accountNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCOUNT_NO'
		}
	}, {
		tableName: 'DNRNEW',
		timestamps: false
	});
};
