const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
    console.log("Some dummy text");
    res.send("<h1>First middleware</h1>");
});

app.use("/", (req, res, next) => {
    console.log("Second middleware");
    res.send("<h1>Second middleware</h1>");
});

app.listen(3000);