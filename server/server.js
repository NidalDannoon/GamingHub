// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');


require('dotenv').config();
require("./config/mongoose.config");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
require("./routes/user.route")(app);
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
