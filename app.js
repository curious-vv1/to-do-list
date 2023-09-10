//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");//---->not done as npm install so needs address

// console.log(date());

const app = express();

const items = ["Eat", "Code", "sleep"];//--->we can update const arrays in javascript
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", function (req, res) {

    let day= date.getDate();
    // let day= date.getDay();

    res.render("list", { listTitle: day, newListItems: items });
});



app.post("/", function (req, res) {
    // console.log(req.body);
    let item = req.body.newItem;

    if (req.body.list ==="Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        console.log(req.body.list);
        items.push(item);
        res.redirect("/");
    }
});



app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});







app.listen(3000, function () {
    console.log("server is running at port 3000");
});