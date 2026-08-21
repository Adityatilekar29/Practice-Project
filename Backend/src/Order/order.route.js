const express = require("express")
const router = express.Router()
const upload = require("../Middleware/multer")
const ordercontroller = require("./order.controller")

 router.get("/order/list",ordercontroller.index),
 router.post("/order/store", upload.single("order_image"), ordercontroller.store),
 router.get("/order/show/:id",ordercontroller.show),
 router.put("/order/update/:id",upload.single("order_image"), ordercontroller.updated),
 router.delete("/order/delete/:id",ordercontroller.deleted)

 module.exports = router

