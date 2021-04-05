/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('defaults2', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		appealPerc202: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'APPEAL_PERC202'
		},
		showSttax: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SHOW_STTAX'
		},
		deedpath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DEEDPATH'
		},
		platpath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PLATPATH'
		},
		bsmtHeated: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'BSMT_HEATED'
		},
		noa2Pdf: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'NOA2PDF'
		},
		pushtech: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PUSHTECH'
		},
		pushtechAppeals: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'PUSHTECH_APPEALS'
		},
		hideComments: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'HIDE_COMMENTS'
		},
		sketchEf: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SKETCH_EF'
		},
		abateCalc: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ABATE_CALC'
		},
		inedit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'INEDIT'
		},
		abosAsDefault: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'ABOS_AS_DEFAULT'
		},
		resizePhotos: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'RESIZE_PHOTOS'
		},
		rspath: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RSPATH'
		},
		sumbasement2Screen: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'SUMBASEMENT2SCREEN'
		},
		showV1Sketchbox: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SHOW_V1_SKETCHBOX'
		},
		permitStagingYear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PERMIT_STAGING_YEAR'
		},
		pt61Efficiency: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'PT61_EFFICIENCY'
		},
		heatedareaLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HEATEDAREA_LABEL'
		},
		autoclose: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'AUTOCLOSE'
		},
		autocloseTime: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AUTOCLOSE_TIME'
		},
		customreport1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CUSTOMREPORT1'
		},
		customreport2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CUSTOMREPORT2'
		},
		customreport3: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CUSTOMREPORT3'
		}
	}, {
		tableName: 'DEFAULTS2',
		timestamps: false
	});
};
