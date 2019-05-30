const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  orders: [
    {
      brand: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      },
      imei: Number,
      repairStart: Date,
      repairEnd: Date,
      description: {
        type: String,
        required: true
      },
      wishes: String
    }
  ]
});

module.exports = client = mongoose.model("client", ClientSchema);
