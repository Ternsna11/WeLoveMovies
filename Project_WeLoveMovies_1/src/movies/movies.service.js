const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}

function moviesInTheaters() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select(
      "m.title",
      "m.movie_id",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url"
    )
    .where({ "mt.is_showing": true })
    .groupBy(
      "m.title",
      "m.movie_id",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url"
    );
}

function read(movie_id) {
  return knex("movies as m").select("*").where({ movie_id }).first();
}

function 


module.exports = {
  list,
  moviesInTheaters,
  read,
};
