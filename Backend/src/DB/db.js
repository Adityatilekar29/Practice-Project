const mongoose = require("mongoose");

const connectionDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/Practice-Project")
        console.log("Database Connection Successfully ");
    } catch (error) {
        console.log(error);

    }

}

module.exports = connectionDB