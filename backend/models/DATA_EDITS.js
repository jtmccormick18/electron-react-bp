/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataEdits', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		pkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PKEY'
		},
		pkeyName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'PKEY_NAME'
		},
		fkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FKEY'
		},
		fkeyName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'FKEY_NAME'
		},
		parcelNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PARCEL_NO'
		},
		item: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ITEM'
		},
		def: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DEF'
		},
		userid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'USERID'
		},
		editdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'EDITDATE'
		}
	}, {
		tableName: 'DATA_EDITS',
		timestamps: false
	});
};
