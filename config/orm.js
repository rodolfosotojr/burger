var connection = require("../config/connection");

function getQuestionMarks(arr) {
    var questionMark = [];
  
    for (var i = 0; i < arr.length; i++) {
      questionMark.push("?");
    }
  
    return questionMark.join(", ");
  }

  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.join(", ");
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

        connection.query(query, value, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var query = "UPDATE " + table " SET "
    }
};

orm.insertOne("burgers", ["burger_name", "devoured"], ["Double Cheeseburger", false], function(res){
    console.log(res);
});
