var express = require('express');
var server = express();
var cors = require('cors');

var indexRouter = require('./routers/index.router.js');

var port = process.env.PORT || 8080;

server.use(express.static, (__dirname + "/public"));
server.use(cors);

server.use(indexRouter);

server.listen(port, function(){
  console.log("Now listening to port..." + port);
});
