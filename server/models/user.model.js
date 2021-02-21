 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const CommentSchema = new mongoose.Schema({
  content:String,
}, {timestamps: true})

const PostSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, "Post title is required"]
  },
  content:{
    type: String,
  },
  comment:[CommentSchema]
}, {timestamps: true})

const CategorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Category name is required"]
  },
  picture:String,
  posts:[PostSchema]
}, {timestamps: true})


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
      },
      lastName: {
        type: String,
        required: [true, "Last name is required"]
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
      },
      role:{
          type:String,
          default: "USER_ROLE"
      },
      posts:[PostSchema]
        
}, {timestamps: true})

// const GamingHubSchema = new mongoose.Schema({

// },{timestamps: true})


UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        console.log("*-*-*-*-*-*-*-*-*-*-*-**-**-*=> your hashed password is "+ hash);
        this.password = hash;
        next();
      });
  });

module.exports.User = mongoose.model("User", UserSchema);
module.exports.Category = mongoose.model("Category", CategorySchema);
module.exports.Comment = mongoose.model("Comment", CommentSchema);