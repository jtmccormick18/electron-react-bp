/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fDnr', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		dnrkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DNRKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		boatkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOATKEY'
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
		dnrclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DNRCLASS'
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
		f1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'F1'
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
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		taxcls: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXCLS'
		}
	}, {
		tableName: 'f_dnr',
		timestamps: false
	});
};
