const knex = require("../db/connection");

function read(review_id) {
  return knex("reviews").select("*").where({ review_id: review_id }).first();
}

function destroy(review_id) {
  return knex("reviews").where({ review_id: review_id }).first().del();
}
function update(updatedReview) {
  return knex("reviews")
    .select("*")
    .where({ updatedReview: updatedReview.review_id })
    .update(updatedReview, "*")
    .then((updatedReview) => updatedReview[0]);
}

module.exports = {
  read,
  destroy,
  update
};
