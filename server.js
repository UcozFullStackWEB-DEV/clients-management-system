const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const database = require("./config/keys").mongoURL;
const client = require("./routes/api/client");
const repairer = require("./routes/api/repairer");
const passport = require("passport");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => console.log("mongo connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => {
  return res.send("<h1>Hello</h1>");
});

app.use("/api/clients", client);
app.use("/api/repairers", repairer);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
