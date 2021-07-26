const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list);

router.route("/:movieID");

module.exports = router;
