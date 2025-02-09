const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Example", ExampleSchema);
