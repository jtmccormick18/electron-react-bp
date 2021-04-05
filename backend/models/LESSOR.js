/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lessor', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		leskey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'LESKEY'
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
		ownkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'OWNKEY'
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
		descrip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DESCRIP'
		},
		mfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG'
		},
		model: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL'
		},
		year: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR'
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENT'
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'QUANTITY'
		},
		assetnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ASSETNUM'
		},
		serialnum: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'SERIALNUM'
		},
		editdate: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'EDITDATE'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		}
	}, {
		tableName: 'LESSOR',
		timestamps: false
	});
};
