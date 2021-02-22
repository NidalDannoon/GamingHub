const mongoose = require('mongoose');
const PostSchema = require("./user.model");

var CategorySchema = new mongoose.Schema({
    title:{
      type: String,
      required: [true, "Category name is required"]
    },
    image:String,
    posts:[PostSchema]
  }, {timestamps: true})
  

module.exports.Category = mongoose.model("Category", CategorySchema);  