/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wgsketch', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		repropkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REPROPKEY'
		},
		commkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'COMMKEY'
		},
		acckey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ACCKEY'
		},
		mobilekey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOBILEKEY'
		},
		realkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'REALKEY'
		},
		recnum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'RECNUM'
		},
		impkey: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'IMPKEY'
		},
		vertices: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'VERTICES'
		},
		labels: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LABELS'
		},
		implabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'IMPLABEL'
		},
		area: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'AREA'
		},
		perimeter: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERIMETER'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		sketch: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SKETCH'
		},
		drawArea: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DRAW_AREA'
		}
	}, {
		tableName: 'WGSKETCH',
		timestamps: false
	});
};
