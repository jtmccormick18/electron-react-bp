/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fBoat', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'RECID'
		},
		perskey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'PERSKEY'
		},
		boatkey: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOATKEY'
		},
		taxYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'TAX_YEAR'
		},
		mfgName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MFG_NAME'
		},
		modelName: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MODEL_NAME'
		},
		gaReg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'GA_REG'
		},
		yearBuilt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'YEAR_BUILT'
		},
		feet: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'FEET'
		},
		inch: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'INCH'
		},
		hullMater: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL_MATER'
		},
		hullNo: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HULL_NO'
		},
		datePurch: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DATE_PURCH'
		},
		newUsed: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'NEW_USED'
		},
		boatCost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOAT_COST'
		},
		motorMfg: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_MFG'
		},
		motorModl: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_MODL'
		},
		motorYear: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_YEAR'
		},
		horsepower: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'HORSEPOWER'
		},
		motorStrt: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_STRT'
		},
		motorPur: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_PUR'
		},
		motorDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'MOTOR_DATE'
		},
		motorCost: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOTOR_COST'
		},
		motorVal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOTOR_VAL'
		},
		motorBook: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_BOOK'
		},
		motorPage: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_PAGE'
		},
		boatType: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOAT_TYPE'
		},
		boatValue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOAT_VALUE'
		},
		boatBook: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOAT_BOOK'
		},
		boatPage: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOAT_PAGE'
		},
		motorbkval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOTORBKVAL'
		},
		boatbkval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BOATBKVAL'
		},
		btmtvalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BTMTVALUE'
		},
		location: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'LOCATION'
		}
	}, {
		tableName: 'f_boat',
		timestamps: false
	});
};
