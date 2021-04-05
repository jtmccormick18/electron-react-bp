/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('other', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		otherkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'OTHERKEY'
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
		descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIP'
		},
		year: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR'
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
		cost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COST'
		},
		bookVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOOK_VAL'
		},
		book: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOOK'
		},
		page: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PAGE'
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'VALUE'
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'COMMENTS'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		mavorig: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAVORIG'
		},
		mav: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MAV'
		},
		abateEx: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ABATE_EX'
		},
		unabatedval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNABATEDVAL'
		}
	}, {
		tableName: 'OTHER',
		timestamps: false
	});
};
