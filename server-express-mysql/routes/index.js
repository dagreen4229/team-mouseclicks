var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');



router.get('/clientProfiles', function(req, res, next) {
    models.client_profile.findAll({}).then(clientProfilesFound => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(clientProfilesFound)
      );
    });
  });

router.get('/clientUsers', function(req, res, next) {
    models.client_user.findAll({}).then(clientUsersFound => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(clientUsersFound)
      );
    });
  });





/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' })
});


module.exports = router;