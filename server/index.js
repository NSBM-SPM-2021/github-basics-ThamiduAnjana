const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "spm_librarymanagementsystem"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get", (req,res) =>{
    const sqlSelect = "SELECT * FROM books_tb";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req,res) => {

    const bookid = req.body.bookid;
    const isbnno = req.body.isbnno;
    const booktitle = req.body.booktitle;
    const author = req.body.author;
    const publishdate = req.body.publishdate;
    const addingdate = req.body.addingdate;
    const pages = req.body.pages;
    const price = req.body.price;
    const source = req.body.source;
    const remarks = req.body.remarks;

    const sqlInsert = "INSERT INTO books_tb (Book_ID,ISBN_NO,Book_Title,Author,Publish_Date,Adding_Date,Pages,Price,Source,Remarks)VALUES(?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [bookid,isbnno,booktitle,author,publishdate,addingdate,pages,price,source,remarks],(err, result) => {
        console.log(result);
    });
});

app.listen(3002, () => {
    console.log("running on port 3002");
});