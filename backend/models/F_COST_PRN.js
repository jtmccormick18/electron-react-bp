/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fCostPrn', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		costkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'COSTKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PERSKEY'
		},
		itemDesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ITEM_DESC'
		},
		item: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ITEM'
		},
		acqYear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ACQ_YEAR'
		},
		group: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'GROUP'
		},
		disposals: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DISPOSALS'
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COST'
		},
		depr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'DEPR'
		},
		funcObs: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FUNC_OBS'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		type: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TYPE'
		},
		modyear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODYEAR'
		},
		newused: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEWUSED'
		},
		serialno: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SERIALNO'
		},
		editdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'EDITDATE'
		},
		econObs: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ECON_OBS'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		rel: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REL'
		},
		assetClas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ASSET_CLAS'
		},
		bookVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'BOOK_VAL'
		},
		book: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOOK'
		},
		page: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PAGE'
		},
		valmethod: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VALMETHOD'
		},
		costval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'COSTVAL'
		},
		marketval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MARKETVAL'
		},
		incomeval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'INCOMEVAL'
		},
		apmcost: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'APMCOST'
		},
		ovrdep: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'OVRDEP'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		edittime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EDITTIME'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EXISTS'
		},
		edited: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EDITED'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MAV'
		},
		wireless: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'WIRELESS'
		},
		manuallabor: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MANUALLABOR'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX'
		}
	}, {
		tableName: 'F_COST_PRN',
		timestamps: false
	});
};
