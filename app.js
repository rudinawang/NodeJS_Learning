const express = require("express"); // requiring express package
const app = express(); // storing it in app, app vannay variable throughout use garxum

app.set("view engine", "ejs"); // moilay ejs use garna lagayko xu HTML content dekhauna lai , k k chahinay ho env behind the scene set garday hai vanayrw nodejs lai inform garay,

app.get("/", (req, res) => {
  // views vitra ko file render garyo hai

  const name = "Rudra Nahawang Pandey";
  res.render("home", { name: name });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

// port number vanayko room number jastai raixa hai
app.listen(3000, () => {
  console.log("NodeJS Project has started on port 3000");
});
