var Confirm = (function () {

    'use strict';

    const VERSION = '1.0.1';

    return {

        _version: (arg) => {
            return VERSION === arg;
        },

        _string: (arg) => {
            return typeof arg == "string";
        },

        _num: (arg) => {
            return isNaN(arg) ? false : typeof arg == "number";
        },


        _bool: (arg) => {
            return typeof arg == "boolean";
        },

        _undefined: (arg) => {
            return typeof arg == "undefined";
        },


        _null: (arg) => {
            return typeof arg == null || typeof arg === "undefined";
        },

        _float: (arg) => {
            return arg === +arg && arg !== (arg | 0);
        },


        _int: (arg) => {
            return arg === +arg && arg === (arg | 0);
        },

        _date: (arg) => {
            return arg.constructor.toString().indexOf("Date") > -1;
        },

        _object: (arg) => {
            var getType = {};
            var response = typeof arg == 'function' ? (arg && getType.toString.call(arg) === '[object Function]') : (arg !== null && typeof arg === 'object');
            return response;
        },

        _array: (arg) => {
            return Object.prototype.toString.call(arg) === '[object Array]'
        },

        _regexp: (arg) => {
            return arg instanceof RegExp;
        },
    }
}());


module.exports = Confirm;
