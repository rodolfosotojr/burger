//Importing ORM and referenced the MvcExample handlebars ./14.3/16
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(column, value, cb) {
      orm.insertOne("burgers", column, value, function(res) {
        cb(res);
      });
    },
    updateOne: function(assgn, condition, cb) {
      orm.updateOne("burgers", assgn, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  