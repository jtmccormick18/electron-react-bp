/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('consValue', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		acckey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCKEY'
		},
		repropkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REPROPKEY'
		},
		commkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMMKEY'
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
		value40: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VALUE40'
		},
		acres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACRES'
		}
	}, {
		tableName: 'CONS_VALUE',
		timestamps: false
	});
};
