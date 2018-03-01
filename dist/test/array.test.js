'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)([1, 3, 2]);

describe('array', function () {
  it('should splice without mutating', function () {
    var b = a.splice(1, 1, 4, 5);
    expect(b.length).toBe(4);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should reverse by returning, not mutating', function () {
    var b = a.reverse();
    expect(b.pop()).toBe(1);
    expect(b.shift()).toBe(2);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should sort without mutating', function () {
    var b = a.sort();
    expect(b.pop()).toBe(3);
    expect(b.shift()).toBe(1);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should pop without mutating', function () {
    var b = a.pop();
    expect(b).toBe(2);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should push without mutating', function () {
    var b = a.push(4);
    expect(b.length).toBe(4);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should shift without mutating', function () {
    var b = a.shift();
    expect(b).toBe(1);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should unshift without mutating', function () {
    var b = a.unshift(4, 5);
    expect(b.length).toBe(5);
    expect(b).toContain(5);
    expect((0, _index.isDemuted)(b)).toBe(true);
  });

  it('should not mutate under any circumstances', function () {
    expect(a.length).toBe(3);
  });

  it('should remain demuted', function () {
    expect((0, _index.isDemuted)(a)).toBe(true);
  });
});