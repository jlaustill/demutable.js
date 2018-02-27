'use strict';

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)([1, 2, 3]);
var b = a.push(4);
var c = a.pop();

console.log('a: [' + a + '], b: [' + b + '], c: [' + c + '], a.includes(1): ' + a.includes(1));

var d = (0, _index2.default)({
  name: 'test',
  favoriteNumbers: [1, 3, 5]
});

console.log('d: ' + JSON.stringify(d) + ', d.favoriteNumbers.pop(): ' + d.favoriteNumbers.pop());