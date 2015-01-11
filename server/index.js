var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var config = require('./config');
require('./config/express')(app);

server.listen(config.port, function () {
  console.log('App listening on port ' + config.port);
});

require('./routes')(app);

io.on('connection', require('./socket'));

module.exports = exports = app;