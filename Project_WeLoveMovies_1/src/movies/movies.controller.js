const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  if (req.query.is_showing) {
    res.json({ data: await service.moviesInTheaters() });
  }
  res.json({ data: await service.list() });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
