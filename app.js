const express = require("express"); // requiring express package
const app = express(); // storing it in app, app vannay variable throughout use garxum

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello world from Nepal </h1><p>This is Paragraph.</p><h2>I'm a Software Engineer.</h2><p>Good Night</p><h1>Rudra Nahawang Pandey</h1><p>Hello Developers</p>"
  );
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
