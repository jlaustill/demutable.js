const _ = require('lodash');

demuteArray = function (obj) {
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

exports.demuteArray = demuteArray;