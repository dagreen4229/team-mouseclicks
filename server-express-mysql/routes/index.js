var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');


// Call to pull all client profiles -- *Functional*
router.get('/clientProfiles', function(req, res, next) {
    models.client_profile.findAll({}).then(clientProfilesFound => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(clientProfilesFound)
      );
    });
  });

// Call to pull all client users -- *Functional*  
router.get('/clientUsers', function(req, res, next) {
    models.client_user.findAll({}).then(clientUsersFound => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(clientUsersFound)
      );
    });
  });

  // Call to pull all appointments -- *Functional*
router.get('/appointments', function(req, res, next) {
  models.appointments.findAll({}).then(appointmentsFound => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(appointmentsFound)
    );
  });
});

// // Call to POST a new Provider user
// router.post('/registerPUser', function(req,res,next){
//   models.provider_user.create(req.body)
//   .then(newPUser => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(newPUser));
//   })
//   .catch(err => {
//     res.status(400);
//     res.send(err.message)
//   })
// });  

// // Call to post a new Client user
// router.post('/registerCUser', function(req,res,next){
//   models.client_user.create(req.body)
//   .then(newCUser => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(newCUser));
//   })
//   .catch(err => {
//     res.status(400);
//     res.send(err.message)
//   })
// });

// Call to post a new User
router.post('/registerUser', function(req,res,next){
  models.user.create(req.body)
  .then(newUser => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(newUser));
  })
  .catch(err => {
    res.status(400);
    res.send(err.message)
  })
});

// Call to POST a new Client Profile
router.post('/registerCProfile', function(req,res,next){
  models.client_profile.create(req.body)
  .then(newCProfile => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(newCProfile));
  })
  .catch(err => {
    res.status(400);
    res.send(err.message)
  })
});

// Call to POST a new Provider Profile
router.post('/registerPProfile', function(req,res,next){
  models.provider_profile.create(req.body)
  .then(newPProfile => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(newPProfile));
  })
  .catch(err => {
    res.status(400);
    res.send(err.message)
  })
});

router.post('/createAppointment', function(req,res,next) {
  models.appointments.create(req.body)
  .then(newApt => {
    res.setHeader('Content-Type', 'application/json');
    res.send.apply(JSON.stringify(newApt));
  })
  .catch(err => {
    res.status(400);
    res.send(err.message)
  })
});


  // router.post('/registerPUser', function (req,res,next) {
  //   models.provider_user.findOrCreate({
  //     where: {
  //       Username: req.body.Username
  //     }
  //   }).spread(function(result,created) {
  //     if (created) {
  //       res.send('Successfully created User' + result.Username)
  //       res.redirect('/pdashboard/' + result.User_ID);
  //     } else {
  //       console.log(result.Username)
  //       res.status(400);
  //       res.send('User Already Exists.')
  //     }
  //   });
  // });



/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' })
});


module.exports = router;