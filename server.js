// Require/import the HTTP module
var express = require("express");
var path = require("path");
// Define a port to listen for incoming requests
var PORT = 3000;
var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];
  

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

