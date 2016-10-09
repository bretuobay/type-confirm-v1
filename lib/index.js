
var Cleanex = (function () {
<<<<<<< HEAD
    var confirm = require('./confirm');
    var cleanObj = {};
    cleanObj.confirm_type = (type_function, param) => {
=======

  var confirm = require('./confirm');
  var cleanObj = {};



    cleanObj.confirm_type = (type_function,param)=> {
        // all functions was have arg, if not param , print version
>>>>>>> 8378c3a130ea04d13302e74c87fd97564ccf468e
        return confirm[type_function](param);
    }
    return cleanObj;
})();

module.exports = Cleanex;
