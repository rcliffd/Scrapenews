const db = require("../models");

module.exports = function(app) {
  app.put("/articles/:id", function(req, res) {
    db.Article.update({ id: req.params.id }, { saved: req.body.saved }).then(
      function(Data) {
        res.json(data);
      }
    );
  });

  app.post("/articles/:id", function(req, res) {
    db.Article.create(req.body)
      .then(function(Data) {
        return db.Article.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { note: dbNote.id } },
          { new: true }
        );
      })
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.$push(err);
      });
  });

  app.delete("/notes/:id", function(req, res) {
    db.Note.delete({ _id: req.params.id }).then(function(Data) {
      res.json(Data);
    });
  });
};
