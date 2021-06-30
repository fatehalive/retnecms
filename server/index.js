const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require('./util/databaseconnect');
const routes = require('./router/routes');

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Routes
app.use(routes)

sequelize.sync()
    .then(app.listen(5000, console.log('server is running at port 5000')))
    .catch(error => { console.log(error) })