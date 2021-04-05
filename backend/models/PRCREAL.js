/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prcreal', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		userid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'USERID'
		},
		name: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAME'
		},
		add1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADD1'
		},
		add2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADD2'
		},
		add3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADD3'
		},
		csz: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CSZ'
		},
		phyAddr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PHY_ADDR'
		},
		totalacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTALACRES'
		},
		zoningcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZONINGCODE'
		},
		homeexempt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HOMEEXEMPT'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAXDISTRIC'
		},
		legalDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LEGAL_DESC'
		},
		covType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'COV_TYPE'
		},
		covValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COV_VALUE'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		impvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPVALUE'
		},
		accvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCVALUE'
		},
		landvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LANDVALUE'
		},
		totalvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTALVALUE'
		},
		taxvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXVALUE'
		},
		histyr1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTYR1'
		},
		histyr2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTYR2'
		},
		histyr3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTYR3'
		},
		histval1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTVAL1'
		},
		histval2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTVAL2'
		},
		histval3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HISTVAL3'
		},
		subval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SUBVAL'
		},
		accdes: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ACCDES'
		},
		adfactor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ADFACTOR'
		},
		neighbor: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEIGHBOR'
		},
		neighinfl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NEIGHINFL'
		},
		adjsubval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ADJSUBVAL'
		},
		infltype1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE1'
		},
		infltype2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE2'
		},
		infltype3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE3'
		},
		infltype4: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE4'
		},
		infltype5: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE5'
		},
		infltype6: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE6'
		},
		infltype7: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INFLTYPE7'
		},
		influence1: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE1'
		},
		influence2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE2'
		},
		influence3: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE3'
		},
		influence4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE4'
		},
		influence5: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE5'
		},
		influence6: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE6'
		},
		influence7: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INFLUENCE7'
		},
		totalinfl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTALINFL'
		},
		totlandval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TOTLANDVAL'
		},
		cs: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CS'
		},
		prevVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PREV_VAL'
		},
		income: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INCOME'
		},
		landlot: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDLOT'
		},
		landdist: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDDIST'
		},
		landgmd: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LANDGMD'
		},
		noRelease: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'NO_RELEASE'
		},
		incImp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INC_IMP'
		},
		incCs: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INC_CS'
		},
		orighomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ORIGHOMVAL'
		},
		currhomval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURRHOMVAL'
		},
		statehsval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'STATEHSVAL'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mavcurr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVCURR'
		},
		mavag: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVAG'
		},
		mavpref: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVPREF'
		},
		mavprev: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVPREV'
		},
		currVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURR_VAL'
		}
	}, {
		tableName: 'PRCREAL',
		timestamps: false
	});
};
