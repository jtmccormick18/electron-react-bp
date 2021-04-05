/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		loginid: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'LOGINID'
		},
		password: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PASSWORD'
		},
		hits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
			field: 'HITS'
		},
		ownGuest: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OWN_GUEST'
		},
		ownView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OWN_VIEW'
		},
		ownEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OWN_EDIT'
		},
		realView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'REAL_VIEW'
		},
		realEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'REAL_EDIT'
		},
		resView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RES_VIEW'
		},
		resEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RES_EDIT'
		},
		comView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'COM_VIEW'
		},
		comEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'COM_EDIT'
		},
		accView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ACC_VIEW'
		},
		accEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ACC_EDIT'
		},
		landView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'LAND_VIEW'
		},
		landEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'LAND_EDIT'
		},
		saleView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SALE_VIEW'
		},
		saleEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SALE_EDIT'
		},
		applView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'APPL_VIEW'
		},
		applEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'APPL_EDIT'
		},
		mhView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MH_VIEW'
		},
		mhEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MH_EDIT'
		},
		persView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PERS_VIEW'
		},
		persEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PERS_EDIT'
		},
		boatView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BOAT_VIEW'
		},
		boatEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BOAT_EDIT'
		},
		invnNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INVN_NONE'
		},
		invnView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INVN_VIEW'
		},
		invnEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INVN_EDIT'
		},
		meffNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MEFF_NONE'
		},
		meffView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MEFF_VIEW'
		},
		meffEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'MEFF_EDIT'
		},
		othrView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OTHR_VIEW'
		},
		othrEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OTHR_EDIT'
		},
		airView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'AIR_VIEW'
		},
		airEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'AIR_EDIT'
		},
		rschView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RSCH_VIEW'
		},
		rschEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RSCH_EDIT'
		},
		pschView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PSCH_VIEW'
		},
		pschEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PSCH_EDIT'
		},
		admNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ADM_NONE'
		},
		admEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ADM_EDIT'
		},
		rptNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RPT_NONE'
		},
		rptView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RPT_VIEW'
		},
		rptEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RPT_EDIT'
		},
		indxNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INDX_NONE'
		},
		indxEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INDX_EDIT'
		},
		elogNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ELOG_NONE'
		},
		elogEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ELOG_EDIT'
		},
		rappNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RAPP_NONE'
		},
		rappEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'RAPP_EDIT'
		},
		imexNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'IMEX_NONE'
		},
		imexEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'IMEX_EDIT'
		},
		utilNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'UTIL_NONE'
		},
		utilEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'UTIL_EDIT'
		},
		ovrNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OVR_NONE'
		},
		ovrEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'OVR_EDIT'
		},
		realAppr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'REAL_APPR'
		},
		persAppr: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PERS_APPR'
		},
		auditor: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'AUDITOR'
		},
		prebill: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PREBILL'
		},
		gisNone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GIS_NONE'
		},
		gisView: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GIS_VIEW'
		},
		gisEdit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GIS_EDIT'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		keyboard: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'KEYBOARD'
		},
		winViewer: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'WIN_VIEWER'
		},
		pt61None: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PT61_NONE'
		},
		pt61View: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PT61_VIEW'
		},
		pt61Edit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PT61_EDIT'
		},
		dbfilter: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DBFILTER'
		}
	}, {
		tableName: 'USERS',
		timestamps: false
	});
};
