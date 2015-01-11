/** @jsx React.DOM */

jest.dontMock('../app.js')

describe('app', function () {
  it('renders hello world', function () {
    var React = require('react/addons')
      , App = require('../app.js')
      , TestUtils = React.addons.TestUtils
    ;

    var app = TestUtils.renderIntoDocument(
      <App />
    );

    var heading = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');

    expect(heading.getDOMNode().textContent).toEqual('Hello World!');
  });
});