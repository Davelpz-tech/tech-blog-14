const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
// const postRoutes = require('./post-routes');

router.use("/", homeRoutes)
router.use('/api', apiRoutes);
router.use("/dashboard", dashboardRoutes);
// router.use("/posts", postRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;