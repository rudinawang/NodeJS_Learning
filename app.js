const express = require("express"); // requiring express package
const app = express(); // storing it in app, app vannay variable throughout use garxum

app.get("/", (req, res) => {
  res.send("<h1>Hello world from Nepal </h1>");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

// port number vanayko room number jastai raixa hai
app.listen(3000, () => {
  console.log("NodeJS Project has started on port 3000");
});
