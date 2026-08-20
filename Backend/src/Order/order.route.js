const express = require("express")
const router = express.Router()
const ordercontroller = require("./order.controller")

 router.get("/order/list",ordercontroller.index),
 router.post("/order/store",ordercontroller.store),
 router.get("/order/show/:id",ordercontroller.show),
 router.put("/order/update?:id",ordercontroller.updated),
 router.delete("/order/delete/:id",ordercontroller.deleted)

 module.exports = router

