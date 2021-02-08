var express = require("express");
var mySqlConnection = require("../connection");
var Router = express.Router();
Router.get("/createDB", function (req, res) {
    var sql = "CREATE DATABASE nodemysql";
    mySqlConnection.query(sql, function (err) {
        if (err) {
            throw err;
        }
        res.status(200).send("Database Created");
    });
});
Router.get("/createBookDirectory", function (req, res) {
    var sql = "CREATE TABLE bookDirectory (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), author VARCHAR(255))";
    mySqlConnection.query(sql, function (err) {
        if (err) {
            throw err;
        }
    });
    res.status(200).send("bookDirectory Created");
});
Router.get("/addBooks/:bookName/:authorName", function (req, res) {
    var sql = "INSERT INTO bookDirectory (name, author) VALUES ?";
    var bookName = req.params.bookName;
    var authorName = req.params.authorName;
    // let value = [
    // ["Alice in Wonderland","Lewis Carroll"],
    // ["Around the World in Eighty Days","Jules Verne"],
    // ["David Copperfield","Charles Dickens"]
    // ];
    var value = [[bookName, authorName]];
    mySqlConnection.query(sql, [value], function (err) {
        if (err) {
            throw err;
        }
        res.status(200).send("Books Records Added: ");
    });
});
Router.get("/", function (req, res) {
    var sql = "SELECT * FROM bookDirectory";
    mySqlConnection.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results);
        res.status(200).send("record Found: ");
    });
});
Router.get("/:id", function (req, res) {
    var sql = "SELECT * FROM bookDirectory WHERE id = " + req.params.id;
    mySqlConnection.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results);
        res.status(200).send("record Found for Book ID : " + req.params.id + "  ");
    });
});
Router.get("/updateBooks/:id/:name", function (req, res) {
    var newName = req.params.name;
    var sql = "UPDATE bookDirectory SET author ='" + newName + "' WHERE id = " + req.params.id;
    mySqlConnection.query(sql, function (err) {
        if (err) {
            throw err;
        }
        res.status(200).send("UPDATED");
    });
});
Router.get("/deleteBooks/:id", function (req, res) {
    var sql = "DELETE FROM bookDirectory WHERE id = " + req.params.id;
    mySqlConnection.query(sql, function (err) {
        if (err) {
            throw err;
        }
        res.status(200).send("DELETED");
    });
});
module.exports = Router;
