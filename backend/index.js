require("dotenv-safe").load();
const express = require("express");
const alunasRoute = require("./alunas/routes.js");
const app = express();
const PORT = process.env.PORT || 5000;

var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/reprograma");
mongoose.connect("mongodb://reprograma:reprograma13@ds155651.mlab.com:55651/reprograma");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("conexão feita com sucesso.");
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use("/api/alunas", alunasRoute);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));
