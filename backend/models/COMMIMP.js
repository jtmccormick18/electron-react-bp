/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commimp', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		commkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'COMMKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'REALPROP',
				key: 'REALKEY'
			},
			field: 'REALKEY'
		},
		improvNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'IMPROV_NO'
		},
		sectionNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SECTION_NO'
		},
		comment1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENT1'
		},
		comimpovr: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMIMPOVR'
		},
		ovrRsn: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'OVR_RSN'
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
		usedasCod: {
			type: DataTypes.CHAR,
			allowNull: true,
			references: {
				model: 'COMMBASE',
				key: 'USED_CODE'
			},
			field: 'USEDAS_COD'
		},
		biltasCod: {
			type: DataTypes.CHAR,
			allowNull: true,
			references: {
				model: 'COMMBASE',
				key: 'USED_CODE'
			},
			field: 'BILTAS_COD'
		},
		wallHght: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WALL_HGHT'
		},
		constType: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CONST_TYPE'
		},
		lifeExp: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE_EXP'
		},
		yrBilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YR_BILT'
		},
		efyrBilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EFYR_BILT'
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
		phyDepovr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PHY_DEPOVR'
		},
		econObsl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ECON_OBSL'
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
		pctComp: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PCT_COMP'
		},
		found1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUND_1'
		},
		foundpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FOUNDPCT1'
		},
		foundqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUNDQC1'
		},
		found2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUND_2'
		},
		foundpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FOUNDPCT2'
		},
		foundqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUNDQC2'
		},
		found3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUND_3'
		},
		foundpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FOUNDPCT3'
		},
		foundqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUNDQC3'
		},
		wallfr1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFR_1'
		},
		wallfrpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WALLFRPCT1'
		},
		wallfrqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFRQC1'
		},
		wallfr2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFR_2'
		},
		wallfrpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WALLFRPCT2'
		},
		wallfrqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFRQC2'
		},
		wallfr3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFR_3'
		},
		wallfrpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WALLFRPCT3'
		},
		wallfrqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WALLFRQC3'
		},
		exwall1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXWALL_1'
		},
		exwallpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXWALLPCT1'
		},
		exwallqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXWALLQC1'
		},
		exwall2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXWALL_2'
		},
		exwallpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXWALLPCT2'
		},
		exwallqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXWALLQC2'
		},
		exwall3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXWALL_3'
		},
		exwallpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXWALLPCT3'
		},
		exwallqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXWALLQC3'
		},
		rooffr1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFFR_1'
		},
		rooffrpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ROOFFRPCT1'
		},
		rooffrqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFFRQC1'
		},
		rooffr2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFFR_2'
		},
		rooffrpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ROOFFRPCT2'
		},
		rooffrqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFFRQC2'
		},
		rooffr3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFFR_3'
		},
		rooffrpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ROOFFRPCT3'
		},
		rooffrqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFFRQC3'
		},
		roofcv1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFCV_1'
		},
		roofcvpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ROOFCVPCT1'
		},
		roofcvqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFCVQC1'
		},
		roofcv2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFCV_2'
		},
		roofcvpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ROOFCVPCT2'
		},
		roofcvqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFCVQC2'
		},
		roofcv3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFCV_3'
		},
		roofcvpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ROOFCVPCT3'
		},
		roofcvqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFCVQC3'
		},
		flrcon1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRCON_1'
		},
		flrconpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLRCONPCT1'
		},
		flrconqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRCONQC1'
		},
		flrcon2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRCON_2'
		},
		flrconpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLRCONPCT2'
		},
		flrconqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRCONQC2'
		},
		flrcon3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRCON_3'
		},
		flrconpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLRCONPCT3'
		},
		flrconqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRCONQC3'
		},
		flrfin1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRFIN_1'
		},
		flrfinpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLRFINPCT1'
		},
		flrfinqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRFINQC1'
		},
		flrfin2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRFIN_2'
		},
		flrfinpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLRFINPCT2'
		},
		flrfinqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRFINQC2'
		},
		flrfin3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRFIN_3'
		},
		flrfinpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FLRFINPCT3'
		},
		flrfinqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FLRFINQC3'
		},
		intwal1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INTWAL_1'
		},
		intwalpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INTWALPCT1'
		},
		intwalqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INTWALQC1'
		},
		intwal2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INTWAL_2'
		},
		intwalpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INTWALPCT2'
		},
		intwalqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INTWALQC2'
		},
		intwal3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INTWAL_3'
		},
		intwalpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INTWALPCT3'
		},
		intwalqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'INTWALQC3'
		},
		clgfin1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLGFIN_1'
		},
		clgfinpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CLGFINPCT1'
		},
		clgfinqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLGFINQC1'
		},
		clgfin2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLGFIN_2'
		},
		clgfinpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CLGFINPCT2'
		},
		clgfinqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLGFINQC2'
		},
		clgfin3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLGFIN_3'
		},
		clgfinpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CLGFINPCT3'
		},
		clgfinqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CLGFINQC3'
		},
		wire1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WIRE_1'
		},
		wirepct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WIREPCT1'
		},
		wireqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WIREQC1'
		},
		wire2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WIRE_2'
		},
		wirepct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WIREPCT2'
		},
		wireqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WIREQC2'
		},
		wire3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WIRE_3'
		},
		wirepct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WIREPCT3'
		},
		wireqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WIREQC3'
		},
		light1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LIGHT_1'
		},
		lightpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIGHTPCT1'
		},
		lightqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LIGHTQC1'
		},
		light2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LIGHT_2'
		},
		lightpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIGHTPCT2'
		},
		lightqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LIGHTQC2'
		},
		light3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LIGHT_3'
		},
		lightpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIGHTPCT3'
		},
		lightqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LIGHTQC3'
		},
		heatac1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATAC_1'
		},
		heatacpct1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HEATACPCT1'
		},
		heatacqc1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATACQC1'
		},
		heatac2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATAC_2'
		},
		heatacpct2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HEATACPCT2'
		},
		heatacqc2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATACQC2'
		},
		heatac3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATAC_3'
		},
		heatacpct3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HEATACPCT3'
		},
		heatacqc3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATACQC3'
		},
		oneFix: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ONE_FIX'
		},
		twoFix: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TWO_FIX'
		},
		threeFix: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'THREE_FIX'
		},
		bathKit: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BATH_KIT'
		},
		bathKit15: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BATH_KIT15'
		},
		bathKit20: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BATH_KIT20'
		},
		strucVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'STRUC_VAL'
		},
		exfeatVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXFEAT_VAL'
		},
		bldgVal: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BLDG_VAL'
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
		ovrdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'OVRDATE'
		},
		calcValue: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CALC_VALUE'
		},
		expense: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXPENSE'
		},
		capreate: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CAPREATE'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		commWall: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMM_WALL'
		},
		bldgArea: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BLDG_AREA'
		},
		secArea: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'SEC_AREA'
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
		mavef: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVEF'
		},
		houseNo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HOUSE_NO'
		},
		extension: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXTENSION'
		},
		stdirect: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STDIRECT'
		},
		streetNam: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STREET_NAM'
		},
		sttype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STTYPE'
		},
		unit: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNIT'
		},
		quad: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'QUAD'
		},
		mavbldg: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVBLDG'
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
		siteaddid: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SITEADDID'
		},
		unittype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'UNITTYPE'
		},
		numUnits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NUM_UNITS'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX'
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
		tableName: 'COMMIMP',
		timestamps: false
	});
};
