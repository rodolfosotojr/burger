//Referenced the Mvc example handlebars ./14.3/16
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: true
        },
        {id: req.params.id},
        function(){
          res.redirect("/");
        }
    );
});

module.exports = router;