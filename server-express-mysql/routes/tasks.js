var express = require("express");
var router = express.Router();
var models = require("../models");

router.get('/', function(req,res,next) {
  models.provider_user.findAll({ })
    .then(pusers => {
      let mappedPUsers = pusers.map(provider_user => (
        {PUserId: provider_user.User_ID,
          Username: provider_user.Username,
          Password: provider_user.Password,
          Email_Address: provider_user.Email_Address,
          Admin: provider_user.Admin,
          Deleted: provider_user.Deleted
        }
      ));
      res.send(JSON.stringify(mappedPUsers));
    });
});





/*


router.get("/", function(req, res, next) {
  models.provider_user.findAll().then(pusers => res.json(pusers));
});

router.post("/", function(req, res, next) {
  let newProvider = new models.provider_user();
  newProvider.name = req.body.name;
  newProvider.complete = req.body.complete;
  newProvider.save().then(puser => res.json(puser));
});

router.delete("/:id", function(req, res, next) {
  let UserId = parseInt(req.params.id);
  models.provider_user.findByPk(UserId)
    .then(puser => puser.destroy())
    .then(() => res.send({ UserId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.UserId.update(
    {
      name: req.body.name,
      complete: req.body.complete
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(puser => res.json(puser));
});
*/
module.exports = router;
