const express = require("express");
// const mysql = require("mysql");

const app = express();

app.get("/",(req, res) => {
    res.send("hello world");
});

app.listen(3001,() => {
    console.log("running on port 3001");
})