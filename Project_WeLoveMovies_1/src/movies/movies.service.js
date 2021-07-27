const knex = require("../db/connection");

function list(is_showing) {
  return knex("movies as m")
    .select("m.*")
    .modify((queryBuilder) => {
      if (is_showing) {
        queryBuilder
          .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
          .where({ "mt.is_showing": true })
          .groupBy("m.movie_id");
      }
    });
}

// without using .modify in the above function our function to show movies showing in theaters

// function moviesInTheaters() {
//   return knex("movies as m")
//     .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
//     .select("m.*")
//     .where({ "mt.is_showing": true })
//     .groupBy(
//       "m.title",
//       "m.movie_id",
//       "m.runtime_in_minutes",
//       "m.rating",
//       "m.description",
//       "m.image_url"
//     );
// }

function read(movie_id) {
  return knex("movies as m").select("*").where({ movie_id }).first();
}
function theatersByMovie(movie_id) {
  return knex("theaters")
    .select(
      "theaters.theater_id",
      "theaters.name",
      "theaters.address_line_1",
      "theaters.address_line_2",
      "theaters.city",
      "theaters.state",
      "theaters.zip",
      "movies_theaters.created_at",
      "movies_theaters.updated_at",
      "movies_theaters.is_showing",
      "movies.movie_id"
    )
    .join(
      "movies_theaters",
      "theaters.theater_id",
      "movies_theaters.theater_id"
    )
    .join("movies", "movies_theaters.movie_id", "movies.movie_id")
    .where({ "movies_theaters.is_showing": true })
    .where({ "movies.movie_id": movie_id });
}

function reviewsByMovie(movie_id) {
  return knex("movies")
    .select("*")
    .join("reviews", "movies.movie_id", "reviews.movie_id")
    .join("critics", "reviews.critic_id", "critics.critic_id")
    .where({ "movies.movie_id": movie_id });
}

module.exports = {
  list,
  // moviesInTheaters,
  read,
  theatersByMovie,
  reviewsByMovie,
};
