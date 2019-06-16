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

//@route  GET api/clients/
//@desc   Return single client profile
//@access Public

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.findById(req.params.id)
      .then(client => {
        return res.json(client);
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
    Client.findById(req.params.id)
      .then(client => {
        console.log(client);
        const order = ({ brand, model, description } = req.body);
        client.orders.unshift(order);
        client
          .save()
          .then(updatedClient => {
            //dont return object inside of res.json({}) :D
            return res.json(updatedClient);
          })
          .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(404).json(err));
  }
);

//@route  GET api/clients/edit-client-order/
//@desc   Add new client
//@access Private

router.get(
  "/find/:client_id/:order_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.find({ "orders._id": req.params.order_id })
      .then(client => {
        return res.json({ client });
      })
      .catch(err => res.status(400).json(err));
  }
);

router.post(
  "/edit-client-order/:client_id/:order_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.findOne({ _id: req.params.client_id })
      .then(currenTclient => {
        const orders = currenTclient.orders.map(order => {
          if (order._id == req.params.order_id) {
            const { body } = req;
            const model = body.model || order.model;
            const brand = body.brand || order.brand;
            const imei = body.imei || order.imei;
            const repairStart = body.repairStart || order.repairStart;
            const description = body.description || order.description;
            const active = body.active || order.active;
            const wishes = body.wishes || order.wishes;
            const updatedOrder = {
              model,
              brand,
              imei,
              repairStart,
              description,
              active,
              wishes
            };
            return updatedOrder;
          }
          return order;
        });
        currenTclient.orders = orders;
        currenTclient
          .save()
          .then(clientWithUpdatedOrder => res.json(clientWithUpdatedOrder))
          .catch(err => res.status(404).json(err));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
