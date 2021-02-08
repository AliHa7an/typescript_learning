const express = require("express");
const mySqlConnection = require("../connection");
const Router = express.Router();

Router.get("/createDB", (req: any, res: any) => {
  let sql = "CREATE DATABASE nodemysql";
  mySqlConnection.query(sql, (err: any) => {
    if (err) {
      throw err;
    }
    res.status(200).send("Database Created");
  });
});

Router.get("/createBookDirectory", (req: any, res: any) => {
  let sql =
    "CREATE TABLE bookDirectory (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), author VARCHAR(255))";
  mySqlConnection.query(sql, (err: any) => {
    if (err) {
      throw err;
    }
  });
  res.status(200).send("bookDirectory Created");
});

Router.get("/addBooks/:bookName/:authorName", (req: any, res: any) => {
  let sql = "INSERT INTO bookDirectory (name, author) VALUES ?";
  let bookName = req.params.bookName;
  let authorName = req.params.authorName;
  // let value = [
  // ["Alice in Wonderland","Lewis Carroll"],
  // ["Around the World in Eighty Days","Jules Verne"],
  // ["David Copperfield","Charles Dickens"]
  // ];
  let value = [[bookName, authorName]];
  mySqlConnection.query(sql, [value], (err: any) => {
    if (err) {
      throw err;
    }
    res.status(200).send("Books Records Added: ");
  });
});

Router.get("/", (req: any, res: any) => {
  let sql = "SELECT * FROM bookDirectory";
  mySqlConnection.query(sql, (err: any, results: any) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.status(200).send("record Found: ");
  });
});

Router.get("/:id", (req: any, res: any) => {
  let sql = `SELECT * FROM bookDirectory WHERE id = ${req.params.id}`;
  mySqlConnection.query(sql, (err: any, results: any) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.status(200).send(`record Found for Book ID : ${req.params.id}  `);
  });
});

Router.get("/updateBooks/:id/:name", (req: any, res: any) => {
  let newName = req.params.name;
  let sql = `UPDATE bookDirectory SET author ='${newName}' WHERE id = ${req.params.id}`;
  mySqlConnection.query(sql, (err: any) => {
    if (err) {
      throw err;
    }
    res.status(200).send("UPDATED");
  });
});

Router.get("/deleteBooks/:id", (req: any, res: any) => {
  let sql = `DELETE FROM bookDirectory WHERE id = ${req.params.id}`;
  mySqlConnection.query(sql, (err: any) => {
    if (err) {
      throw err;
    }
    res.status(200).send("DELETED");
  });
});

module.exports = Router;
