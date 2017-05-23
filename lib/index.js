
var Cleanex = (function () {
  var confirm = require('./confirm');
  var cleanObj = {};

    cleanObj.confirm_type = (type_function,param)=> {
        return confirm[type_function](param);
    }

    cleanObj.ct = (type_function,param)=> {
        return confirm[type_function](param);
    }

    let finalObj = Object.assign({},cleanObj, confirm);

    return finalObj;
})();

module.exports = Cleanex;
