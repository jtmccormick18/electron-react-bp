/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('audit', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		auditkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'AUDITKEY'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'PERSONAL',
				key: 'PERSKEY'
			},
			field: 'PERSKEY'
		},
		audittype: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'AUDITTYPE'
		},
		noYears: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'NO_YEARS'
		},
		audflag: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'AUDFLAG'
		},
		lastname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LASTNAME'
		},
		firstname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FIRSTNAME'
		},
		middle: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MIDDLE'
		},
		address1: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS1'
		},
		address2: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS2'
		},
		address3: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ADDRESS3'
		},
		city: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CITY'
		},
		state: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'STATE'
		},
		zip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ZIP'
		},
		workphone: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'WORKPHONE'
		},
		faxnumber: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FAXNUMBER'
		},
		fei: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FEI'
		},
		sst: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SST'
		},
		contact: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CONTACT'
		},
		naics: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NAICS'
		},
		lastaudit: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'LASTAUDIT'
		},
		nextaudit: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'NEXTAUDIT'
		},
		auditor: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'AUDITOR'
		},
		performBy: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PERFORM_BY'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		yr1Retinv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR1RETINV'
		},
		yr1Audinv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR1AUDINV'
		},
		yr2Retinv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR2RETINV'
		},
		yr2Audinv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR2AUDINV'
		},
		yr3Retinv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR3RETINV'
		},
		yr3Audinv: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR3AUDINV'
		},
		yr1Retff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR1RETFF'
		},
		yr1Audff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR1AUDFF'
		},
		yr2Retff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR2RETFF'
		},
		yr2Audff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR2AUDFF'
		},
		yr3Retff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR3RETFF'
		},
		yr3Audff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'YR3AUDFF'
		},
		recordsloc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RECORDSLOC'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		reviewflag: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'REVIEWFLAG'
		},
		nextreview: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'NEXTREVIEW'
		},
		lastreview: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'LASTREVIEW'
		},
		audityear1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AUDITYEAR1'
		},
		audityear2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AUDITYEAR2'
		},
		audityear3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AUDITYEAR3'
		},
		yr1DiffInvn: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_DIFF_INVN'
		},
		yr2DiffInvn: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_DIFF_INVN'
		},
		yr3DiffInvn: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_DIFF_INVN'
		},
		yr1DiffMeff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_DIFF_MEFF'
		},
		yr2DiffMeff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_DIFF_MEFF'
		},
		yr3DiffMeff: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_DIFF_MEFF'
		},
		yr1ReturnMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_RETURN_MARINE'
		},
		yr2ReturnMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_RETURN_MARINE'
		},
		yr3ReturnMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_RETURN_MARINE'
		},
		yr1AuditMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_AUDIT_MARINE'
		},
		yr2AuditMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_AUDIT_MARINE'
		},
		yr3AuditMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_AUDIT_MARINE'
		},
		yr1DiffMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_DIFF_MARINE'
		},
		yr2DiffMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_DIFF_MARINE'
		},
		yr3DiffMarine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_DIFF_MARINE'
		},
		yr1ReturnAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_RETURN_AIRCRAFT'
		},
		yr2ReturnAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_RETURN_AIRCRAFT'
		},
		yr3ReturnAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_RETURN_AIRCRAFT'
		},
		yr1AuditAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_AUDIT_AIRCRAFT'
		},
		yr2AuditAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_AUDIT_AIRCRAFT'
		},
		yr3AuditAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_AUDIT_AIRCRAFT'
		},
		yr1DiffAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR1_DIFF_AIRCRAFT'
		},
		yr2DiffAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR2_DIFF_AIRCRAFT'
		},
		yr3DiffAircraft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'YR3_DIFF_AIRCRAFT'
		}
	}, {
		tableName: 'AUDIT',
		timestamps: false
	});
};
