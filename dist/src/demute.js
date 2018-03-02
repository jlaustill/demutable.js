'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _demuteArray = require('./demute-array');

var _demuteArray2 = _interopRequireDefault(_demuteArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demute = function demute(_obj) {
  var obj = (0, _demuteArray2.default)(_obj);
  var objectIsFunction = typeof obj === 'function';

  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function (name) {
    var prop = obj[name];
    if ((objectIsFunction ? name !== 'caller' && name !== 'callee' && name !== 'arguments' : true) && prop !== null && ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object' || prop === 'function') && !Object.isFrozen(prop)) {
      demute(prop);
    }
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
};

exports.default = demute;