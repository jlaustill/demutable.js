'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ = require('lodash');

var demuteArray = function demuteArray(obj) {
    if (_.isArray(obj)) {
        obj.push = function (value) {
            return [].concat(_toConsumableArray(this), [value]);
        };

        obj.pop = function () {
            return this[this.length - 1];
        };
    }

    return obj;
};

exports.default = demuteArray;