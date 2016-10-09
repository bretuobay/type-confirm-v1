
var Cleanex = (function () {
  var confirm = require('./confirm');
  var cleanObj = {};
    cleanObj.confirm_type = (type_function,param)=> {
        return confirm[type_function](param);
    }
    return cleanObj;
})();

module.exports = Cleanex;
