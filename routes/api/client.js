const express = require("express");
const router = express.Router();
const Client = require("../../models/client");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//@route  GET api/clients/
//@desc   Return all clients
//@access Public

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.find({})
      .then(clients => {
        return res.json(clients);
      })
      .catch(err => res.status(400).json(err));
  }
);

//@route  GET api/clients/add-client
//@desc   Add new client
//@access Private

router.post(
  "/add-client",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const userData = ({ name, surname, phone } = req.body);
    const order = ({ brand, model, description } = req.body);
    const newClient = new Client(userData);
    newClient.orders.unshift(order);
    newClient
      .save()
      .then(client => {
        return res.json(client);
      })
      .catch(err => res.status(404).json(err));
  }
);

//@route  GET api/clients/add-client-order/
//@desc   Add new client
//@access Private

router.post(
  "/add-client-order/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.findOne({ _id: req.params.id })
      .then(client => {
        const order = ({ brand, model, description } = req.body);
        client.orders.unshift(order);
        client
          .save()
          .then(updatedClient => {
            return res.json({ updatedClient });
          })
          .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
