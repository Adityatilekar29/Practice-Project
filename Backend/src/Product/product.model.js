const { default: mongoose } = require("mongoose");

const Product = mongoose.model("product", {
  product_name: {
    type: String,
    maxlength: 255,
    trim: true,
    required: true,
  },
  product_image: {
    type: String,
    maxlength: 255,
    default: "",
  },
  product_description: {
    type: String,
    maxlength: 500,
    trim: true,
  },
  product_prize: {
    type: Number,
  },
});
module.exports = Product;
