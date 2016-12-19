var express = require('express');
var app = express();
var fs = require("fs");
var router = express.Router();

require('./monitoring.js')(router);

router.get('/', function (req, res, next){
    res.send("Welcome!");
    next();
});

//router.get('/listUsers', function (req, res, next) {
  // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     //  if(err)
   //    {
       //    next({"status":"404", "message":'File not found!'});
       //}
       //else
       //{
        //   res.end( data );
       //}
   //});
//})

//router.get('/:id', function (req, res) {
   // First read existing users.
  // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    //   if(err)
      // {
        //   next({"status":"404", "message":'File not found!'});
      // }
      // else
       //{
         //  users = JSON.parse( data );
           //var user = users["user" + req.params.id] 
           //res.end( JSON.stringify(user));
       //}
   //});
//});

app.use(router);

app.listen(4000, function () {
  console.log("Example app listening at 4000");
});

module.exports = router;
