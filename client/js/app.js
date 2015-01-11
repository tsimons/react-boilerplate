/** @jsx React.DOM */

var React = require('react');

var App = React.createClass({
  getDefaultProps: function () {
    return {
      greeting: "Hello"
    } 
  },
  render: function() {
    return (
      <h1>{this.props.greeting} World!</h1>
    );
  }

});

module.exports = App;