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

console.log('d starts as: ' + JSON.stringify(d));
console.log('d.favoriteNumbers.pop(): ' + d.favoriteNumbers.pop());
console.log('d.favoriteNumbers.shift(): ' + d.favoriteNumbers.shift());
console.log('d.favoriteNumbers.push(7): ' + d.favoriteNumbers.push(7));
// console.log(`d.favoriteNumbers.unshift(a, b): ${d.favoriteNumbers.unshift(a, b)}`);
console.log('d ends as: ' + JSON.stringify(d));