console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish kodlari
app.use(express.static("public")); // Bu har qanday browserdan kirib kelayotkan requestlar uchun public folder ochiq degan manoni bildiradi. Faqatgina public folderni kora oliwadi yani clientlar
app.use(express.json()); // kirib kelayotkan json formatdagi datani object formatga ogirib beradi!
app.use(express.urlencoded({ extended: true })); // HTML dan traditional request form shakl bor va formdan nmanidur post qisak express qabul qilib oladi

// 2: Sessions kodlari

// 3: Views kodlari
app.set("views", "views"); //folderni korsatyapmiz
app.set("view engine", "ejs"); //view enjin ejs ekanligini korsatb beryapmz

// 4: Router kodlari
app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("reja"); // HTML formatda ham javobni client ga yuborish mumkun
  // res.end("<h1> Our very first project </h1>");
});

// serverni hosil qilish
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
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
