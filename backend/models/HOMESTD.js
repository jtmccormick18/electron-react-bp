/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('homestd', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		taxdistric: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'TAXDISTRIC'
		},
		exempt: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'EXEMPT'
		},
		excounty: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXCOUNTY'
		},
		exschool: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXSCHOOL'
		},
		exstate: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXSTATE'
		},
		exbond: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'EXBOND'
		},
		schoolEx: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SCHOOL_EX'
		},
		statehsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'STATEHSFLG'
		}
	}, {
		tableName: 'HOMESTD',
		timestamps: false
	});
};
