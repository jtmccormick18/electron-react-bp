/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('neighbor', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
		},
		neigh: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true,
			field: 'NEIGH'
		},
		descripton: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'DESCRIPTON'
		},
		rurlandadj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RURLANDADJ'
		},
		reslandadj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RESLANDADJ'
		},
		resimpadj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RESIMPADJ'
		},
		comimpadj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMIMPADJ'
		},
		acesoryadj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACESORYADJ'
		}
	}, {
		tableName: 'NEIGHBOR',
		timestamps: false
	});
};
