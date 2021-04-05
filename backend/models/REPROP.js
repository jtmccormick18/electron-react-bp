/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Reprop = sequelize.define(
    'reprop',
    {
      recid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'RECID',
      },
      repropkey: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'REPROPKEY',
      },
      realkey: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'REALKEY',
      },
      digclass: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'DIGCLASS',
      },
      digstrat: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'DIGSTRAT',
      },
      occupancy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'OCCUPANCY',
      },
      yrBuilt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'YR_BUILT',
      },
      efyrBuilt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'EFYR_BUILT',
      },
      grade: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'GRADE',
      },
      obsvCond: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'OBSV_COND',
      },
      noBedrms: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'NO_BEDRMS',
      },
      noRooms: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'NO_ROOMS',
      },
      foundation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'FOUNDATION',
      },
      extWalls: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'EXT_WALLS',
      },
      roofing: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'ROOFING',
      },
      roofShape: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'ROOF_SHAPE',
      },
      floorCons: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'FLOOR_CONS',
      },
      bAOpt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'B_A_OPT',
      },
      sqbArea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'SQB_AREA',
      },
      sqbFin: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'SQB_FIN',
      },
      sqaArea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'SQA_AREA',
      },
      sqaFin: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'SQA_FIN',
      },
      dbDesc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'DB_DESC',
      },
      dbFin: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'DB_FIN',
      },
      basemtqual: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'BASEMTQUAL',
      },
      dAttic: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'D_ATTIC',
      },
      atticqual: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'ATTICQUAL',
      },
      floorFin: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'FLOOR_FIN',
      },
      intWall: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'INT_WALL',
      },
      intCeil: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'INT_CEIL',
      },
      heat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'HEAT',
      },
      plStd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PL_STD',
      },
      plXtra: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PL_XTRA',
      },
      fullbaths: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'FULLBATHS',
      },
      halfbaths: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'HALFBATHS',
      },
      sthtCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'STHT_CODE',
      },
      heatedarea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'HEATEDAREA',
      },
      pfuncDep: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PFUNC_DEP',
      },
      pecDep: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PEC_DEP',
      },
      pcom: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PCOM',
      },
      phyDep: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PHY_DEP',
      },
      phyOvr: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'PHY_OVR',
      },
      ovrVal: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'OVR_VAL',
      },
      timpVal: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'TIMP_VAL',
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'COMMENT',
      },
      ovrRsn: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'OVR_RSN',
      },
      cdu: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'CDU',
      },
      ovrdate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'OVRDATE',
      },
      adjPoints: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'ADJ_POINTS',
      },
      apprname: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'APPRNAME',
      },
      rcn: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'RCN',
      },
      calcValue: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'CALC_VALUE',
      },
      exists: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '0',
        field: 'EXISTS',
      },
      sketch: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '0',
        field: 'SKETCH',
      },
      photo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '0',
        field: 'PHOTO',
      },
      statehsflg: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '0',
        field: 'STATEHSFLG',
      },
      mavorig: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'MAVORIG',
      },
      mav: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'MAV',
      },
      houseNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'HOUSE_NO',
      },
      extension: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'EXTENSION',
      },
      stdirect: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'STDIRECT',
      },
      streetNam: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'STREET_NAM',
      },
      sttype: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'STTYPE',
      },
      unit: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'UNIT',
      },
      quad: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'QUAD',
      },
      mavovr: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '0',
        field: 'MAVOVR',
      },
      mktRisk: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'MKT_RISK',
      },
      sb346Val: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'SB346VAL',
      },
      localhsflg: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '0',
        field: 'LOCALHSFLG',
      },
      sb346Add: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'SB346ADD',
      },
      basepsf: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'BASEPSF',
      },
      heatpsf: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'HEATPSF',
      },
      siteaddid: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'SITEADDID',
      },
      unittype: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'UNITTYPE',
      },
      abateEx: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'ABATE_EX',
      },
      lat: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'LAT',
      },
      lon: {
        type: DataTypes.CHAR,
        allowNull: true,
        field: 'LON',
      },
      tba: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'CREATE DEFAULT DF_EmptyInteger AS 0; ',
        field: 'TBA',
      },
      hsbaseadj: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'HSBASEADJ',
      },
    },
    {
      tableName: 'REPROP',
      timestamps: false,
    }
  );

  Reprop.associate = function (models) {
    Reprop.hasOne(models.realprop, {
      foreignKey: 'realkey',
    });
  };

  return Reprop;
};
