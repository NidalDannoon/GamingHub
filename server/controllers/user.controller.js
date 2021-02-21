const {User, Category, Comment} = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.getAllUsers = (request, response) => {
    User.find()
        .then(allUsers => response.json({Users: allUsers}))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

module.exports.getAllPosts = (request, response) => {
    Book.find()
        .then(allBooks => response.json({books: allBooks}))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

module.exports.getAllCategories = (request, response) => {
    Category.find()
        .then(allCategories => response.json({Categories: allCategories}))
        .catch(err => response.json({ message: "Something went wrong, cant get categories", error: err}))
};

module.exports.findSingleUser = (request, response) => {
    User.find({_id: request.params.id})
        .then(oneSingleUser => response.json({ User: oneSingleUser}))
        .catch(err => response.json({ message: "Something went wrong", error: err}));
};

module.exports.createUser = (request, response) => {

    User.create(request.body)
        .then(user => response.json({ msg: "success!", user: user }))
        .catch(err => response.status(400).json(err))
};

module.exports.createCategory = (request, response) => {
    Category.create(request.body)
        .then(category => response.json({ msg: "success!", category: category }))
        .catch(err => response.status(400).json(err))
};

module.exports.createPost = (request, response) => {

    console.log(request.body.title);
    User.findOneAndUpdate({_id: request.params.id},{
        $push: { posts: {title:request.body.title, content:request.body.content} }
    })
        .then(user => response.json({ msg: "success!", user: user }))
        .catch(err => res.json(err));
};

module.exports.registerUser = (request, response) => {
    User.create(request.body)
        .then(user => {
            const payload = {
                id: user._id
              };
            console.log("-**-/-/-/-*/-/-*/-*/-/-*/-*/-/ is there anything here ?"+user)
            const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY);
            response
                .cookie("userToken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success! this is working idiot!", user: user});
        })
        .catch(err => response.status(400).json(err))
};


module.exports.createBook = (request, response) => {
    const { name } = request.body;
    Book.create({
        name,
    })
        .then(book => response.json(book))
        .catch(err => response.status(400).json(err))
};

module.exports.getAllBooks = (request, response) => {
    Book.find()
        .then(allBooks => response.json({books: allBooks}))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

module.exports.logIn = async (request, response) =>{
    const user = await User.findOne({ email: request.body.email });
 
    if(user === null) {
        // email not found in users collection
        return response.sendStatus(400);
    }
 
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(request.body.password, user.password);
 
    if(!correctPassword) {
        // password wasn't a match!
        return response.sendStatus(400);
    }
 
    // if we made it this far, the password was correct
    const payload = {
        id: user._id
      };
    const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY);
 
    // note that the response object allows chained calls to cookie and json
    response
        .cookie("userToken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success! this is working idiot" });
}

module.exports.logout = (request, response) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
};