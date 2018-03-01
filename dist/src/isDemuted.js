'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDemuted = function isDemuted(obj) {
  if (Object.isFrozen(obj)) {
    // Retrieve the property names defined on obj
    var propNames = Object.getOwnPropertyNames(obj);

    return propNames.every(function (p) {
      var prop = obj[p];

      if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object' && prop !== null) {
        return isDemuted(prop);
      }

      return true;
    });
  }

  return false;
};

exports.default = isDemuted;