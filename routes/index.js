var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/post',function(req,res){
  var email= req.param("email");
  var password= req.param("password");
  console.log(email + " " + password);
  res.send("got request");
});


module.exports = router;
