const express = require("express");
const app = express();
//const mysql = require("mysql");

/*const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"spm_librarymanagementsystem",
});*/

app.get("/",(req, res) => {
    /*const sqlInsert = "INSERT INTO books_tb (Book_ID,ISBN_NO,Book_Title,Author,Publish_Date"-
    ",Adding_Date,Pages,Source,Remarks) VALUES (1,'12','TEST','TEST','2021-08-08','2021-08-08'"-
    ",50,550.00,'TEST','TEST');"
    db.query(sqlInsert,(err,result)=>{*/
        res.send("hello world");
    //});
});

app.listen(3001,() => {
    console.log("running on port 3001");
})