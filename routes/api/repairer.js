const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Repairer = require("../../models/repairer");
const passport = require("passport");
const validateRegisterInputs = require("../../validation/repairerValidation");
const validateLoginInputs = require('../../validation/loginValidation');
const jwt = require('jsonwebtoken');
const secret = require('../../config/keys').secret;
//@route  GET api/repairers/register
//@desc   Return all clients
//@access Public

router.get("/", (req, res) => res.json({ msg: "Repairer works" }));

router.get('/private',
passport.authenticate('jwt', {session: false}),
(req,res) => {    
  Repairer.findOne({username : req.body.username})
  .then(repairer => {
    if(!repairer) {
      return res.status(404).json({noprofile: 'no profile'})
    }
    const {_id,email,username,phone} = repairer;
    const response = {_id,email,username,phone}
    res.json(response)
  })
  .catch(err => res.status(404).json(err));
}
)
router.post("/register", (req, res) => {
  const { isValid, errors } = validateRegisterInputs(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Repairer.findOne({ email: req.body.email }).then(repairer => {
    if (repairer) {
      return res.status(400).json({ email: "Email already exist" });
    }

    const { email, password, username, phone } = req.body;

    const newRepairer = new Repairer({ email, password, username, phone });
    bcrypt.genSalt(10, function(err, salt) {
      if(err) throw err;
      bcrypt.hash(newRepairer.password, salt, function(err, hash) {
        newRepairer.password = hash;
        newRepairer
        .save()
        .then(repairer => {
          return res.json(repairer);
        })
        .catch(errors => {
          return res.status(400).json(errors);
        });
      });
  });
          

  })
  .catch(err => res.status(400).json(err));

});

//@route  GET api/repairers/login
//@desc   Login repairer
//@access Public

router.post(
  '/login',
  (req,res) => {
    const { isValid, errors } = validateLoginInputs(req.body);
    if(!isValid) {
      res.status(400).json(errors);
    }
    console.log(req.body)
    const { email,password } = req.body;

    Repairer.findOne({ email })
    .then(repairer => {
      if(!repairer) {
        return res.status(400).json({email: 'User not found'})
      }
      bcrypt.compare(password,repairer.password)
      .then((isEqual) => {
        if(isEqual) {
          const payload =  {id: repairer._id, username: repairer.username,phone: repairer.phone}
          jwt.sign(payload,secret,{expiresIn : 3600},(err,token) => {
            return res.json({
              token: 'Bearer ' + token
            })
          })         
        }else {
          return res.status(400).json({error: 'passwords is not equal'})
        }
      })
    })
  }
)
module.exports = router;
