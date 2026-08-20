const Product = require("./product.model");

const list = async (req, res) => {
  try {
    const data = await Product.find();
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json({
      message: "error in list",
    });
  }
};

const store = async (req, res) => {
  try {
    const { product_name, product_description, product_prize } = req.body;
    const save = await Product.create({
      product_name,
      product_description,
      product_prize,
      product_image,
    });
    if (!save) {
      return res.jaon({
        message: "something went wrong ",
      });
    }
    return res.json({
      product_name,
      product_description,
      product_prize,
      product_image,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.deleteOne({ _id: id });
    return res.json({ message: "Record deleted successfully..!" });
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json("Internal server problem");
  }
};
const show = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findById({ _id: id });
    return res.json(data);
  } catch (error) {
    console.log(error);
    console.log("Internal server problem");
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, product_description, product_prize } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        product_name,
        product_description,
        product_prize,
      },
      { new: true },
    );
    if (req.file) {
      updateProduct.product_image = req.file.filename;
    }
    await updateProduct.save();
    return res.json({
      data: updateProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  list,
  store,
  deleted,
  show,
  update,
};
