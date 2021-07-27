const knex = require("../db/connection");

// function addMovies = reduceProperties

function list() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("*")
    .then(addMovies);
}

module.exports = {
  list,
};
