/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dorCuvSubs', {
		coname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONAME'
		},
		conum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONUM'
		},
		digyr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DIGYR'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'REALKEY'
		},
		landkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LANDKEY'
		},
		subType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SUB_TYPE'
		},
		descrip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIP'
		},
		ltype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LTYPE'
		},
		lclass: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LCLASS'
		},
		acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ACRES'
		},
		cuvMatch: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CUV_MATCH'
		},
		createdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'CREATEDATE'
		}
	}, {
		tableName: 'DOR_CUV_SUBS',
		timestamps: false
	});
};
