<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const connectionDB = require("./DB/db");
const UserRoutes = require("./Users/User.route");
=======
const express = require("express")
const cors = require("cors")
const connectionDB = require("./DB/db")
const UserRoutes = require("./Users/User.route")
const OrderRoute = require("./Order/order.route")
>>>>>>> 271e9f0b6e7a30f00aec4194ba301a342606aa33
const app = express();
const productroute = require("./Product/product.router");
connectionDB();
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.use("/api", UserRoutes);
app.use("/api", productroute);
=======
app.use("/api", UserRoutes)
app.use("/api",OrderRoute)
>>>>>>> 271e9f0b6e7a30f00aec4194ba301a342606aa33

module.exports = app;
