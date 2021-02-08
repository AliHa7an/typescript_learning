"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var bookRoutes = require("./routes/book");
var app = express();
app.use(bodyParser.json());
app.use("/book", bookRoutes);
app.listen(3000);
