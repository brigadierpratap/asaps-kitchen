const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = express();
app.set("trust proxy", 1); // trust first proxy

app.enable("trust proxy");
app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyparser.json({ type: "application/*+json" }));

const port = process.env.PORT || 3001;

app.use("/api/", require("./router/index"));
app.get("/", (req, res) => {
  res.send("Hello");
});
// app.use(express.session({ secret: "keyboard cat" }));
app.listen(port, () => {
  console.log("Running");
});
