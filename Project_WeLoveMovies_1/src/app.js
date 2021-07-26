if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const moviesRouter = require("./movies/movies.router");

app.use(express.json());

app.use("/movies", moviesRouter);
// app.use("/theaters", theatersRouter);
// app.use("/reviews", reviewsRouter);
// app.use("/critics", criticsRouter);
// app.use("/movies_theater", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
