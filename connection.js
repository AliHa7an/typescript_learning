var mysql = require("mysql");
var mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
});
mySqlConnection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected");
});
module.exports = mySqlConnection;
