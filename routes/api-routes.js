// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the questions
  app.get("/api/posts/", function(req, res) {
    db.question_db.findAll({})
    .then(function(question_db) {
      res.json(question_db);
    });
  });

  // Get route for returning feedback of a specific topic
  app.get("/api/posts/category/:category", function(req, res) {
    db.question_db.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(question_db) {
      res.json(question_db);
    });
  });

  // Get rotue for retrieving a single question
  app.get("/api/posts/:id", function(req, res) {
    db.question_db.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(question_db) {
      res.json(question_db);
    });
  });

  // Post route for saving a new question
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.question_db.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
    .then(function(question_db) {
      res.json(question_db);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.question_db.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(question_db) {
      res.json(question_db);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.question_db.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(question_db) {
      res.json(question_db);
    });
  });
};