const router = require("express").Router({ mergeParams: true });
const controller = require("./theaters.controllers");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.router("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
