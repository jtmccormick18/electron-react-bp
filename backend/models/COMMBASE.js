/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('commbase', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		usedCode: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'USED_CODE'
		},
		bldgType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BLDG_TYPE'
		},
		naics: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAICS'
		},
		pcBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PC_BASE'
		},
		descript: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIPT'
		},
		priceCode: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PRICE_CODE'
		},
		table: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TABLE'
		},
		life1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE1'
		},
		life2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE2'
		},
		life3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE3'
		},
		life4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE4'
		},
		life5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'LIFE5'
		},
		ccMod1: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CC_MOD1'
		},
		ccMod2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CC_MOD2'
		},
		ccMod3: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CC_MOD3'
		},
		ccMod4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CC_MOD4'
		},
		ccMod5: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CC_MOD5'
		}
	}, {
		tableName: 'COMMBASE',
		timestamps: false
	});
};
