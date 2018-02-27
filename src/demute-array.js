const _ = require('lodash');

const demuteArray = function (obj) {
    if (_.isArray(obj)) {
        obj.push = function(value) {
            return [...this, value];
        };

        obj.pop = function() {
            return this[this.length - 1];
        }
    }

    return obj;
};

export default demuteArray;