
/**
 * Module dependencies.
 */

var thunkify = require('thunkify');
var highrise = require('node-highrise-api');

/**
 * Expose `Client`.
 */

module.exports = Client;

/**
 * Client.
 */

function Client(opts) {
  if (!(this instanceof Client)) return new Client(opts);

  highrise = new highrise(opts);

  Object.keys(highrise).forEach(function(endpoint) {
    if (endpoint == 'client') return;
    Object.keys(highrise[endpoint].__proto__).forEach(function(key) {
      if ('function' != typeof highrise[endpoint].__proto__[key]) return;
      highrise[endpoint][key] = thunkify(highrise[endpoint][key])
    });
  });

  return highrise;
}
