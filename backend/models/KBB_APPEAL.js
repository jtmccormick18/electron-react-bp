/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('kbbAppeal', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		appealkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'APPEALKEY'
		},
		vehicleid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VEHICLEID'
		},
		vehicletypedisplayname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'VEHICLETYPEDISPLAYNAME'
		},
		usedcar: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'USEDCAR'
		},
		priceindicator: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PRICEINDICATOR'
		},
		milesadj: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MILESADJ'
		},
		featureadj: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FEATUREADJ'
		},
		finalvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FINALVALUE'
		}
	}, {
		tableName: 'KBB_APPEAL',
		timestamps: false
	});
};
