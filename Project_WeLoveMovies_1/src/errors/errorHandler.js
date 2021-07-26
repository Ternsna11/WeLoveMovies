function errorHandler(error, req, res, next) {
  const { status = 500, message = "Error has occurred!" } = error;
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
