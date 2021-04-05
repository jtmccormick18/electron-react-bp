/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('boat', {
		recid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'RECID'
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
		boatkey: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
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
			type: DataTypes.STRING,
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
		btcomment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'BTCOMMENT'
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
		},
		autoval: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'AUTOVAL'
		},
		btbkyear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BTBKYEAR'
		},
		mtbkyear: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MTBKYEAR'
		},
		btautoval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'BTAUTOVAL'
		},
		mtautoval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MTAUTOVAL'
		},
		abosBoat: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ABOS_BOAT'
		},
		abosMotor: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ABOS_MOTOR'
		},
		abosBt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ABOS_BT'
		},
		abosMt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'ABOS_MT'
		},
		apprname: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'APPRNAME'
		},
		abosCond: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'ABOS_COND'
		},
		abosAdj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'ABOS_ADJ'
		},
		boatPrice: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BOAT_PRICE'
		},
		mtrPrice: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MTR_PRICE'
		},
		salt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'SALT'
		},
		trailer: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '((0))',
			field: 'TRAILER'
		},
		exists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'EXISTS'
		},
		btcontrol: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'BTCONTROL'
		},
		mtcontrol: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MTCONTROL'
		},
		motorCond: {
			type: DataTypes.CHAR,
			allowNull: true,
			field: 'MOTOR_COND'
		},
		motorAdj: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '((0))',
			field: 'MOTOR_ADJ'
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
		abosmotorAdj: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ABOSMOTOR_ADJ'
		},
		unabatedval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'UNABATEDVAL'
		}
	}, {
		tableName: 'BOAT',
		timestamps: false
	});
};
