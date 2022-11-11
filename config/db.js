const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://mobin:mobin@cluster0.fadbqce.mongodb.net/rudowealth"
  )
};