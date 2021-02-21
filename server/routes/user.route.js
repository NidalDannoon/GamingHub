const UserController = require("../controllers/user.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{
    app.post("/api/register", UserController.registerUser);
    app.post("/api/login", UserController.logIn);
    app.get("/api/categories", UserController.getAllCategories);
    app.get("/api/posts", UserController.getAllPosts);
    app.get("/api/users", UserController.getAllUsers);
    app.post("/api/createu", UserController.createUser);
    app.post("/api/createc", UserController.createCategory);
    app.post("/api/user/:id/createp", UserController.createPost);

}