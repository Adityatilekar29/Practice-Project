const express = require("express");
const UserController = require("./User.controller");
const upload = require("../Middleware/multer");
const router = express.Router()

router.get("/user/list", UserController.index)
router.post("/user/store", upload.single("image"), UserController.store)
router.get("/user/show", UserController.show)
router.put("/user/update", upload.single("image"), UserController.updated)
router.delete("/user/delete/:id", UserController.deleted)

module.exports = router