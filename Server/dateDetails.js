const mongoose = require("mongoose");

const dateDetailsScehma = new mongoose.Schema(
  {
    email: String,
    date: {type:String},
  },
  {
    collection: "UserHistory",
  }
);

mongoose.model("UserHistory", dateDetailsScehma);
