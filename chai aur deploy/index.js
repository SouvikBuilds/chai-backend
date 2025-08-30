require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Souvik Chattejee");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login At Chai Aur Code </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> Chai Aur Code </h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
