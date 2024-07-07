const notFound = (req, res) =>
  res
    .status(404)
    .send("<h1>Please check the provided route, Route does not exist<h1>");

module.exports = notFound;
