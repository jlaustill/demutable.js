'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var demuteArray = function demuteArray(obj) {
    if ((0, _lodash.isArray)(obj) && !(0, _index.isDemuted)(obj)) {
        obj.push = function () {
            for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
            }

            return (0, _index2.default)([].concat(_toConsumableArray(this), values));
        };

        obj.pop = function () {
            return (0, _index2.default)(this[this.length - 1]);
        };

        obj.shift = function () {
            return (0, _index2.default)(this.slice(0, 1)[0]);
        };

        // obj.sort
        obj.sort = function (compareFunction) {
            return (0, _index2.default)((0, _lodash.cloneDeep)(this).sort(compareFunction));
        };

        obj.reverse = function () {
            return (0, _index2.default)(this.map(function (_, i, a) {
                return a[a.length - i - 1];
            }));
        };

        // obj.splice
        obj.splice = function (start, end) {
            for (var _len2 = arguments.length, adds = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                adds[_key2 - 2] = arguments[_key2];
            }

            return (0, _index2.default)([].concat(_toConsumableArray(this.slice(0, start)), adds, _toConsumableArray(this.slice(start + end))));
        };

        obj.unshift = function () {
            for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                values[_key3] = arguments[_key3];
            }

            return (0, _index2.default)([].concat(values, _toConsumableArray(this)));
        };
    }

    return obj;
};

exports.default = demuteArray;