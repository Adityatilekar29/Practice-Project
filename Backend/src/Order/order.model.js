const mongoose = require("mongoose")

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
  },

  order_image: {
    type: String
  }


})

module.exports = ordermodel 