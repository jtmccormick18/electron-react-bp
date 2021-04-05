/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('acessory', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		acckey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ACCKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBILEKEY'
		},
		commkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMMKEY'
		},
		accType: {
			type: DataTypes.CHAR,
			allowNull: true,
			references: {
				model: 'ACC_CTRL',
				key: 'COMP_NO'
			},
			field: 'ACC_TYPE'
		},
		compNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			references: {
				model: 'ACC_CTRL',
				key: 'COMP_NO'
			},
			field: 'COMP_NO'
		},
		rank: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RANK'
		},
		dim1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIM1'
		},
		dim2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DIM2'
		},
		compUnit: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMP_UNIT'
		},
		grade: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'GRADE'
		},
		phyDep: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PHY_DEP'
		},
		funcObsl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FUNC_OBSL'
		},
		otherFact: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OTHER_FACT'
		},
		impVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMP_VAL'
		},
		yearBuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR_BUILT'
		},
		digclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGCLASS'
		},
		digstrat: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DIGSTRAT'
		},
		ovrVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OVR_VAL'
		},
		phyOvr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PHY_OVR'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		idunits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IDUNITS'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		calcValue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CALC_VALUE'
		},
		pcom: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PCOM'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		sketch: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SKETCH'
		},
		photo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PHOTO'
		},
		statehsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'STATEHSFLG'
		},
		mavorig: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAV'
		},
		mavovr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MAVOVR'
		},
		mktRisk: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MKT_RISK'
		},
		sb346Val: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SB346VAL'
		},
		localhsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'LOCALHSFLG'
		},
		sb346Add: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SB346ADD'
		},
		econObsl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ECON_OBSL'
		},
		ovrdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'OVRDATE'
		},
		ovrRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OVR_RSN'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX'
		},
		efyrBuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EFYR_BUILT'
		},
		lat: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LAT'
		},
		lon: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LON'
		}
	}, {
		tableName: 'ACESSORY',
		timestamps: false
	});
};
