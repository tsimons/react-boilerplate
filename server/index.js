var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var config = require('./config');

server.listen(config.port, function () {
  console.log('App listening on port ' + config.port);
});

app.get('/', function (req, res) {
  res.status(200).send('OK');
});

io.on('connection', require('./socket'));

module.exports = exports = app;