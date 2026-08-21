const express = require("express");
const router = express();
const controller = require("./product.controller");
const upload = require("../Middleware/multer");

router.post("/product/store", upload.single("product_image"), controller.store);
router.get("/product/list", controller.list);
router.delete("/product/delete/:id", controller.deleted);
router.get("/product/show/:id", controller.show);
router.put(
  "/product/update/:id",
  upload.single("product_image"),
  controller.update,
);
module.exports = router;
