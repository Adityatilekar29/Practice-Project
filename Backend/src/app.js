const express = require("express")
const cors = require("cors")
const connectionDB = require("./DB/db")


const app = express();

connectionDB();
app.use(cors());



module.exports = app 
