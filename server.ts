export {};
const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/book");

const app = express();
app.use(bodyParser.json());
app.use("/book", bookRoutes);

app.listen(3000);
