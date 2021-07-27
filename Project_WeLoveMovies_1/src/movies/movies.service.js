const knex = require("../db/connection");

function list(is_showing) {
  return knex("movies as m")
    .select("m.*")
    .modify((queryBuilder) => {
      if (is_showing) {
        queryBuilder
          .join("movies_theaters as mt", "m.movie_id", "mt.movies_id")
          .where({ "mt.is_showing": true })
          .groupBy("m.movie_id");
      }
    });
}

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

module.exports = {
  list,
  // moviesInTheaters,
  read,
};
