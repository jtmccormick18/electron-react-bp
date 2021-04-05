/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('taxtypeExempt', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		taxtype: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TAXTYPE'
		},
		excode: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EXCODE'
		},
		statehsflg: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'STATEHSFLG'
		},
		inlieu: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'INLIEU'
		},
		hsfreeze: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'HSFREEZE'
		},
		flthseland: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'FLTHSELAND'
		},
		unltdexmpt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'UNLTDEXMPT'
		},
		maxacres: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAXACRES'
		},
		maxexempt: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAXEXEMPT'
		}
	}, {
		tableName: 'TAXTYPE_EXEMPT',
		timestamps: false
	});
};
