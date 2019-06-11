let expresss = require('express');
let routers = expresss.Router();

/* GET home page. */
routers.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

routers.get('/upload', function(req,res, next){
  res.render('upload')
})

module.exports = routers;
