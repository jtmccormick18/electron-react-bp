/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prcmh', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBILEKEY'
		},
		repropkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REPROPKEY'
		},
		prebmapid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PREBMAPID'
		},
		mobtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBTYPE'
		},
		serialnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SERIALNUM'
		},
		decalyr: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DECALYR'
		},
		decalnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DECALNUM'
		},
		yearbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEARBUILT'
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'WIDTH'
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LENGTH'
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
		mobclass: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOBCLASS'
		},
		extwall: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXTWALL'
		},
		roofing: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ROOFING'
		},
		foundation: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOUNDATION'
		},
		heatair: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HEATAIR'
		},
		fireplace: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FIREPLACE'
		},
		condition: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONDITION'
		},
		fullbaths: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FULLBATHS'
		},
		halfbaths: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'HALFBATHS'
		},
		tipWidth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TIP_WIDTH'
		},
		tipLength: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TIP_LENGTH'
		},
		tipAdj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TIP_ADJ'
		},
		stht: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STHT'
		},
		replacost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REPLACOST'
		},
		effyrbuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EFFYRBUILT'
		},
		deprec: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DEPREC'
		},
		ovridedep: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OVRIDEDEP'
		},
		funcobsol: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FUNCOBSOL'
		},
		econobsol: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ECONOBSOL'
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VALUE'
		},
		ovrvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OVRVALUE'
		},
		addonval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ADDONVAL'
		},
		exempt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXEMPT'
		},
		guide: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'GUIDE'
		},
		guidevalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'GUIDEVALUE'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
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
		mavcurr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVCURR'
		},
		mavprev: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVPREV'
		},
		mavadd: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVADD'
		}
	}, {
		tableName: 'PRCMH',
		timestamps: false
	});
};
