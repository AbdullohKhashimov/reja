<<<<<<< HEAD
const http = require("http");
const mongodb = require("mongodb");
=======
console.log("Web serverni boshlash");

const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    user = JSON.parse(data);
  }
});
>>>>>>> develop

// MongoDB connection:
let db;
const connectionString =
  "mongodb+srv://tony_93:Abu_1323@cluster0.3kb8zqs.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

<<<<<<< HEAD
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
=======
// 2: Sessions kodlari

// 3: Views kodlari
app.set("views", "views"); //folderni korsatyapmiz
app.set("view engine", "ejs"); //view enjin ejs ekanligini korsatb beryapmz

// 4: Router kodlari
app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("harid"); // HTML formatda ham javobni client ga yuborish mumkun
  // res.end("<h1> Our very first project </h1>");
});

// serverni hosil qilish
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});

// const Account = require("./account");
// Account.showClassDetails();
// Account.showTime();

// console.log("========");

// const myAccount = new Account("Tony", 200000, 2017105562);
// myAccount.giveMeDetails();

// // withdrawal that exceeds account balance
// myAccount.withdraw(500000);

// myAccount.makeDeposit(400000);

// Accidently deleted the project uploaded to git hub
>>>>>>> develop
