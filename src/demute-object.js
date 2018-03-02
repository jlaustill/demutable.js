import demute, { isDemuted } from '../index';
import { merge } from 'lodash';

const demuteObject = function (obj) {
    if (!isDemuted(obj)) {
        obj.merge = function(newThis = {}, clears = {}) {
            return demute(merge({}, this, clears, newThis));
        };
    }

    return obj;
};

export default demuteObject;
