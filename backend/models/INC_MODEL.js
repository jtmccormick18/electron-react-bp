/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('incModel', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		modelkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'MODELKEY'
		},
		modeltype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MODELTYPE'
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		bed1Desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BED1_DESC'
		},
		bed1: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'BED1'
		},
		bed2Desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BED2_DESC'
		},
		bed2: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'BED2'
		},
		bed3Desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BED3_DESC'
		},
		bed3: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'BED3'
		},
		bed4Desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BED4_DESC'
		},
		bed4: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'BED4'
		},
		bed5Desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BED5_DESC'
		},
		bed5: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'BED5'
		},
		bed6Desc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BED6_DESC'
		},
		bed6: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'BED6'
		},
		sf: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SF'
		},
		room: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ROOM'
		},
		grm: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GRM'
		},
		vacancy: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'VACANCY'
		},
		expense: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'EXPENSE'
		},
		caprate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'CAPRATE'
		},
		monthly: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'MONTHLY'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		catcode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CATCODE'
		},
		catdesc: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CATDESC'
		}
	}, {
		tableName: 'INC_MODEL',
		timestamps: false
	});
};
