module.exports = function (app) {
  var router = app.loopback.Router();
  router.get("/bruh", function (req, res) {
    res.send("running");
  });
  app.use(router);
};
