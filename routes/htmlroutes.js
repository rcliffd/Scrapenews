const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.export = function(app) {
  app.get("/savedarticles", function(req, res) {
    db.Article.find({})
      .populate("note")
      .then(function(dbarticle) {
        res.render("savedarticles", { articles: dbarticle });
      })
      .catch(function(err) {
        res, json(err);
      });
  });
};
