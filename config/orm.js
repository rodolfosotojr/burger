//A lot of this file was referenced from the MvcExample from handlebars ./14.3/16

var connection = require("../config/connection");

function getQuestionMarks(arr) {
    var questionMark = [];

    for (var i = 0; i < arr.length; i++) {
        questionMark.push("?");
    }

    return questionMark.join(", ");
}

var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, column, value, cb) {
        var query = "INSERT INTO " + table + "(" + column.join(", ") + ")" + "VALUES (" + getQuestionMarks(value) + ") ";

        console.log(query);

        connection.query(query, value, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, assgn, condition, cb) {
        var query = "UPDATE " + table + " SET " + getQuestionMarks(Object.keys(assgn)) + " WHERE " + condition;

        connection.query(query, assgn, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// orm.selectAll("burgers", function(res){
//     console.log(res);
// });

// orm.insertOne("burgers", ["burger_name", "devoured"], ["Double Cheeseburger", false], function(res){
//     console.log(res);
// });

// orm.updateOne("burgers", [{ burger_name: "Double Cheeseburger" }, { devoured: false }], "id=1", function (res) {
//     console.log(res);
// });

module.exports = orm;

