const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(data => {
      res.render("celebrities/index", { data });
    })
    .catch(error => console.log(error));
});

router.get("/celebrity/:celebrityId", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => console.log(error));
});

router.get("/new-celebrity", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new-celebrity", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => console.log(error));
});

router.get("/celebrity/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Celebrity.deleteOne({ _id: id })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => console.log(error));
});

router.get("/edit-celebrity/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celeb => {
      res.render("celebrities/edit", { celeb });
    })
    .catch(error => console.log(error));
});

router.post("/edit-celebrity/:id", (req, res, next) => {
  const { id } = req.params;

  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(id, { $set: { name, occupation, catchPhrase } })
    .then(() => {
      res.redirect(`/celebrity/${id}`);
    })
    .catch(error => console.log(error));
});

// MOVIE ROUTES

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(data => {
      res.render("movies/index", { data });
    })
    .catch(error => console.log(error));
});

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render("movies/show", { movie });
    })
    .catch(error => console.log(error));
});

router.get("/new-movie", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new-movie", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => console.log(error));
});

router.get("/movie/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Movie.deleteOne({ _id: id })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => console.log(error));
});

router.get("/edit-movie/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movieEdit => {
      res.render("movies/edit", { movieEdit });
    })
    .catch(error => console.log(error));
});

router.post("/edit-movie/:id", (req, res, next) => {
  const { id } = req.params;

  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(id, { $set: { title, genre, plot } })
    .then(() => {
      res.redirect(`/movie/${id}`);
    })
    .catch(error => console.log(error));
});

module.exports = router;
