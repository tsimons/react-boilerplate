var app = require('../../server')
  , request = require('supertest');
;

describe('server', function () {
  it('starts', function (done) {
    request(app)
      .get('/')
      .expect(200, done)
    ;
  });
});