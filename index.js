const _ = require('lodash');

demute = function (obj) {
  if (_.isArray(obj)) {
    obj.push = function(value) {
      return [...this, value];
    }

    obj.pop = function() {
      return this[this.length - 1];
    }
  }

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null)
      demute(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}

exports.demute = demute;
