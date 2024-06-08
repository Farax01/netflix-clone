const express = require("express");
const app = express();


app("/", (res, req) => {
    res.render("index.html")
})

app.listen(port, () => {
    console.log("Server is running...")
})