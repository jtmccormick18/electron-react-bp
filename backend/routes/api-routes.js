const db = require('../models');
// const jwt = require('jsonwebtoken');
// const authentication = require('../middleware/authentication');

const fs = require('fs');
const path = require('path');

// const bcrypt = require('bcryptjs');

// require('dotenv').config();

// AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: 'us-east-1' });
// var s3 = new AWS.S3();

// const ResImpAudit = db.res_imp_audit

const Op = require('sequelize').Op;

const { QueryTypes } = require('sequelize');

const { Sequelize } = require('../models');

var imageFolder = 'D:\\McCormick\\Dade\\Photos';

// var placeholderPath = path.join(__basedir, "/client/public/assets/placeholder.jpg");

const queryParamToBool = function (value) {
  return (value + '').toLowerCase() === 'true';
};

var env = process.env.NODE_ENV || 'development';

var configuration = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../config/config.json')),
  'utf8'
);

const defaultPhotoPath = () =>
  `\\\\${configuration[env]['host']}\\tao\\wingapsql\\pictures`;

module.exports = function (app) {
  app.get('/api/first', function (req, res) {
    res.json({
      data: 'sup',
    });
  });

  // app.post('/api/custom-sql', function (req, res) {
  //   console.log(req.body);
  //   let { sqlQuery } = req.body;
  //   db.sequelize
  //     .query(sqlQuery)
  //     .then((data) => res.json(data))
  //     .catch((err) => res.err(err));
  // });

  app.post('/api/custom-sql', async function (req, res) {
    console.log(req.body);
    let { sqlQuery, count } = req.body;
    let { page } = req.query;
    page = parseInt(page);

    let limit = 20;
    let offset = 0;

    let conditions = {
      include: [
        {
          model: db.realprop,
          // as: 'real',
          // on: Sequelize.literal('reprop.realkey=realprop.realkey'),
        },
      ],
      where: Sequelize.literal(sqlQuery),
    };

    const allImprovementsCount = await db.reprop
      .count(conditions)
      .catch((err) => res.status(500).json({ err }));

    console.log({ allImprovementsCount });

    let pages = Math.ceil(allImprovementsCount/ limit);
    offset = limit * (page - 1);

    conditions = { ...conditions, limit, offset };

    const sentImprovements = await db.reprop
      .findAll(conditions)
      .catch((err) => res.status(500).json({ err }));

    res.status(200).json({
      improvements: sentImprovements,
      count: allImprovementsCount,
      pages: pages,
    });

    // db.sequelize
    //   .query(sqlQuery)
    //   .then((data) => {
    //     console.log({data});
    //     if(!count){
    //       count=data.length;
    //     }
    //     res.json(data)
    //   })
    //   .catch((err) => res.err(err));
  });

  app
    .route('/api/database-config')
    .get(function (req, res) {
      let config = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../config/config.json')),
        'utf8'
      );
      let photo_path = config['photo_path'];
      if (!photo_path) {
        photo_path = `\\\\${config[env]['host']}\\tao\\wingapsql\\pictures`;
        fs.writeFileSync(
          path.join(__dirname, '../config/config.json'),
          JSON.stringify({ ...config, photo_path })
        );
      }
      config = config[env];
      config = {
        ...config,
        photo_path,
      };
      res.json(config);
    })
    .put(function (req, res) {
      let config = req.body;
      console.log({ config }, 'put-req');

      let { photo_path } = config;

      let configFile = {
        development: config,
        test: config,
        production: config,
        photo_path,
      };
      fs.writeFileSync(
        path.join(__dirname, '../config/config.json'),
        JSON.stringify(configFile)
      );
      res.json({ updated: true });
    });
};
