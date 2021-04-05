/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dConmai', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		conmaikey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CONMAIKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		parentparc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARENTPARC'
		},
		origconval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ORIGCONVAL'
		},
		tconacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TCONACRES'
		},
		dat0: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT0'
		},
		dat1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT1'
		},
		dat2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT2'
		},
		dat3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT3'
		},
		dat4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT4'
		},
		dat5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT5'
		},
		dat6: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT6'
		},
		dat7: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT7'
		},
		dat8: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT8'
		},
		dat9: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'DAT9'
		},
		val0: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL0'
		},
		val1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL1'
		},
		val2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL2'
		},
		val3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL3'
		},
		val4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL4'
		},
		val5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL5'
		},
		val6: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL6'
		},
		val7: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL7'
		},
		val8: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL8'
		},
		val9: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VAL9'
		},
		origcondat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ORIGCONDAT'
		},
		basecondat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BASECONDAT'
		},
		currCuv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'CURR_CUV'
		},
		unadjCuv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'UNADJ_CUV'
		}
	}, {
		tableName: 'D_CONMAI',
		timestamps: false
	});
};
