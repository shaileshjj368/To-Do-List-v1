const express = require("express");
const Bodyparser = require("body-parser");

const app = express();

let items = ["Eat", "Sleep", "Code"];
let workitems = [];

app.set('view engine', 'ejs');
app.use(Bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req,res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: day, newListItems: items})
});

app.post("/", function(req, res){
    item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

// app.get("/work", function(req,res){
//     res.render("list", {listTitle: "work list", newListItems: workitems});
// });

// app.post("/work", function(req, res){
//     let item = req.body.newItem;
//     workitems.push(item);
//     res.redirect("/");
// })

app.listen(3000, function(){
    console.log("Server is Running");
});