const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}

async function list(req, res, next) {
  res.json({ data: await service.list(req.query.is_showing) });
}

async function read(req, res, next) {
  const { movie: data } = res.locals;
  res.json({ data });
  //  can also be written like this instead; res.json({ data: res.locals.movie });
}

async function theatersByMovie(req, res, next) {
  res.json({ data: await service.theatersByMovie(req.params.movieId) });
}

async function reviewsByMovie(req, res, next) {
  res.json({ data: await service.reviewsByMovie(req.params.movieId) });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  theatersList: asyncErrorBoundary(theatersByMovie),
  reviewsList: asyncErrorBoundary(reviewsByMovie),
};
