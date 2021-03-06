var express = require('express');
var server = express();
var cors = require('cors');
//var logger = require('./middleware/logger.js');

var indexRouter = require('./routers/index.router.js');
var locationRouter = require('./routers/location.router.js');
var forecastRouter = require('./routers/forecast.router.js');

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + "/public"));
//server.use(logger);
server.use(cors());

server.use(indexRouter);
server.use(locationRouter);
server.use(forecastRouter);

server.listen(port, function(){
  console.log("Now listening to port..." + port);
});
