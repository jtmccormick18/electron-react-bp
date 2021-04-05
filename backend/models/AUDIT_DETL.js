/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('auditDetl', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		adetailkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'ADETAILKEY'
		},
		auditkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			references: {
				model: 'AUDIT',
				key: 'AUDITKEY'
			},
			field: 'AUDITKEY'
		},
		audstat: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'AUDSTAT'
		},
		apptDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'APPT_DATE'
		},
		apptTime: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPT_TIME'
		},
		correspond: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'CORRESPOND'
		},
		followUp: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FOLLOW_UP'
		},
		response: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'RESPONSE'
		},
		editDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'EDIT_DATE'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		}
	}, {
		tableName: 'AUDIT_DETL',
		timestamps: false
	});
};
