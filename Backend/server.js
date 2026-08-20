const app = require("./src/app")

const express = require("express")
const path = require("path")

app.use("/images", express.static(path.join(__dirname, "media")))

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
})
