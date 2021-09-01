const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
//Database Connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "spm_librarymanagementsystem"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
//View Book Details
app.get("/api/get", (req,res) =>{
    const sqlSelect = "SELECT * FROM books_tb";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
//Insert Book Details
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
//Delete Book Details
app.delete('/api/delete/:Book_ID',(req, res) => {
    const deletebookid = req.params.Book_ID;
    const sqlDelete = "DELETE FROM books_tb WHERE Book_ID = ?";

    db.query(sqlDelete, deletebookid, (err, result) => {
        if (err) console.log(err);
    });
});
//Update Book Details
app.put("/api/update",(req,res) => {
    const updatebookid = req.body.updatebookid;
    const updateisbnno = req.body.updateisbnno;
    const updatebooktitle = req.body.updatebooktitle;
    const updateauthor = req.body.updateauthor;
    const updatepublishdate = req.body.updatepublishdate;
    const updateaddingdate = req.body.updateaddingdate;
    const updatepages = req.body.updatepages;
    const updateprice = req.body.updateprice;
    const updatesource = req.body.updatesource;
    const updateremarks = req.body.updateremarks;
    //sql string variables
    var sql_isbnno = "";
    var sql_booktitle = "";
    var sql_author = "";
    var sql_publishdate = "";
    var sql_addingdate = "";
    var sql_pages = "";
    var sql_price = "";
    var sql_source = "";
    var sql_remarks = "";
    //input validations
    if(updateisbnno){
        //not empty value
        sql_isbnno = "ISBN_NO = '" + updateisbnno +"'";
    }
    if(updatebooktitle){
        //not empty value
        sql_booktitle = "Book_Title = '" + updateisbnno +"'";
    }
    if(updateauthor){
        //not empty value
        sql_author = "Author = '" + updateauthor +"'";
    }
    if(updatepublishdate){
        //not empty value
        sql_publishdate = "Publish_Date = '" + updatepublishdate +"'";
    }
    if(updateaddingdate){
        //not empty value
        sql_addingdate = "Adding_Date = '" + updateaddingdate +"'";
    }
    if(updatepages){
        //not empty value
        sql_pages = "Pages = '" + updatepages +"'";
    }
    if(updateprice){
        //not empty value
        sql_price = "Price = '" + updateprice +"'";
    }
    if(updatesource){
        //not empty value
        sql_source = "Source = '" + updatesource +"'";
    }
    if(updateremarks){
        //not empty value
        sql_remarks = "Remarks = '" + updateremarks +"'";
    }

    var sqlUpdate = "UPDATE LOW_PRIORITY IGNORE books_tb SET "+ sql_isbnno + sql_booktitle + sql_author + sql_publishdate + sql_addingdate + sql_pages + sql_price + sql_source + sql_remarks +" WHERE Book_ID = ?";
    console.log(sqlUpdate);
    db.query(sqlUpdate,[updatebookid],(err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
});
//Server
app.listen(3002, () => {
    console.log("running on port 3002");
});