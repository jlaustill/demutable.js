import demute, { isDemuted } from '../index';
import { isArray, cloneDeep } from 'lodash';
import demuteObject from './demute-object';

const demuteArray = function (_obj) {
    if (isArray(_obj) && !isDemuted(_obj)) {
        const obj = demuteObject(_obj);

        obj.push = function(...values) {
            return demute([...this, ...values]);
        };

        obj.pop = function() {
            return demute(this[this.length - 1]);
        };

        obj.shift = function() {
            return demute(this.slice(0, 1)[0]);
        };

        // obj.sort
        obj.sort = function(compareFunction) {
            return demute(cloneDeep(this).sort(compareFunction));
        };

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

        return obj;
    }

    return _obj;
};

export default demuteArray;
