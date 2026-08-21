const express = require("express");
const cors = require("cors");
const connectionDB = require("./DB/db");
const UserRoutes = require("./Users/User.route");
const OrderRoute = require("./Order/order.route")
const app = express();
const productroute = require("./Product/product.router");
connectionDB();
app.use(express.json());
app.use(cors());

app.use("/api", UserRoutes);
app.use("/api", productroute);
app.use("/api", OrderRoute);

module.exports = app;
