import mongoose from "mongoose";

const ordermodel = mongoose.model("order",{

    customer_name: {
        
    type: String,
    
  },

  product_name: {
    type: String,
    
  },

  amount: {
    type: Number,
    
  },

  status: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    
  },

  product_image: {
    type: String
  }


})

module.exports = ordermodel 