const mysql = require("mysql");

const mySqlCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

mySqlCon.connect((err: any) => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});

module.exports = mySqlConnection;
