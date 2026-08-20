const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    fullname: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    number: {
        type: Number
    },
    status: {
        type: Boolean
    },

})

module.exports = mongoose.model("User", UserSchema)