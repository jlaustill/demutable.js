'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _demuteArray = require('./src/demute-array');

var _demuteArray2 = _interopRequireDefault(_demuteArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demute = function demute(_obj) {
  var obj = (0, _demuteArray2.default)(_obj);

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function (name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object' && prop !== null) demute(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
};

exports.default = demute;