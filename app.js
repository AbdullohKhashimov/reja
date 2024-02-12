const express = require("express");
const app = express();
const http = require("http");

// MongoDB chaqirish:
const db = require("./server").db();

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
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end(`successfully added`);
    }
  });
});
app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong!");
      } else {
        console.log(data);
        res.render("reja");
      }
    });
});
