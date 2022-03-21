const express = require("express");
const app = express();
const cars = require("./routes/cars");

app.use(express.json());



app.use("/", cars);

app.listen(5000, () => console.log("Listening on port 5000"));
