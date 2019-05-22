let expressf = require('express');
let routerf = expressf.Router();

/* GET users listing. */
routerf.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = routerf;
