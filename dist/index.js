'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDemuted = undefined;

var _demute = require('./src/demute');

var _demute2 = _interopRequireDefault(_demute);

var _isDemuted = require('./src/isDemuted');

var _isDemuted2 = _interopRequireDefault(_isDemuted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.isDemuted = _isDemuted2.default;
exports.default = _demute2.default;