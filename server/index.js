const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "spm_librarymanagementsystem"
});

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO books_tb (Book_ID,ISBN_NO,Book_Title,Author,Publish_Date,Adding_Date,Pages,Price,Source,Remarks)VALUES(1,'123','test','test','2021-8-8','2021-8-8',500,555.75,'test','test');";
    db.query(sqlInsert, (err, result)=>{
        res.send("hello world hi.");
    });
});

app.listen(3002, () => {
    console.log("running on port 3002");
});