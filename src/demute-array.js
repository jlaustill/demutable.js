import demute from '../index';
const _ = require('lodash');

const demuteArray = function (obj) {
    if (_.isArray(obj)) {
        obj.push = function(...values) {
            return demute([...this, ...values]);
        };

        obj.pop = function() {
            return demute(this[this.length - 1]);
        };

        obj.shift = function() {
            return this.slice(0, 1)[0];
        };

        // obj.sort

        obj.reverse = function() {
            return demute(this.map((_, i, a) => a[a.length - i - 1]));
        };

        // obj.splice
        obj.splice = function(start, end, ...adds) {
            return demute([...this.slice(0, start), ...adds, ...this.slice(start + end)]);
        };

        obj.unshift = function(...values) {
            return demute([...values, ...this]);
        }
    }

    return obj;
};

export default demuteArray;
