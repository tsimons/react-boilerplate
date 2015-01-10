var client = require('socket.io-client')
  , config = require('../../../server/config');
;

describe('socket connection', function () {
  var socket;

  beforeEach(function () {
    socket = client(config.uri + ':' + config.port);
  });

  it('connects', function (done) {
    socket.on('connect', function () {
      done();
    });
  });
});