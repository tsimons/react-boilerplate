var _ = require('lodash');

var config = {
  foo: 'bar'
}

module.exports = _.extend(config, require('./environments/' + process.env.NODE_ENV));