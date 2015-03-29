var React = require('react');
var Router = require('react-router');

var Navbar = require('./Navbar.jsx');
var Footer = require('./Footer.jsx');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = App;