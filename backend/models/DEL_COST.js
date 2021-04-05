/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('delCost', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		costkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COSTKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			defaultValue: '((0))',
			field: 'ACQ_YEAR'
		},
		group: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'GROUP'
		},
		disposals: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DISPOSALS'
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COST'
		},
		depr: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEPR'
		},
		funcObs: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
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
			defaultValue: '((0))',
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
			defaultValue: '((0))',
			field: 'REL'
		},
		assetClas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ASSET_CLAS'
		},
		bookVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
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
			defaultValue: '((0))',
			field: 'COSTVAL'
		},
		marketval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MARKETVAL'
		},
		incomeval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INCOMEVAL'
		},
		apmcost: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'APMCOST'
		},
		ovrdep: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
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
			defaultValue: '0',
			field: 'EXISTS'
		},
		edited: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EDITED'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAV'
		},
		adddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ADDDATE'
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
		},
		unabatedval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNABATEDVAL'
		},
		transferin: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'TRANSFERIN'
		},
		estValue: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'EST_VALUE'
		},
		assetno: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ASSETNO'
		}
	}, {
		tableName: 'DEL_COST',
		timestamps: false
	});
};
