
/**
    Sample testing suite using mocha assert lib for testing datatypes of all variables
      *  JavaScript Data Types
      In JavaScript there are 5 different data types that can contain values:

      http://www.w3schools.com/js/js_type_conversion.asp

      string
      number
      boolean
      object
      function
      There are 3 types of objects:

      Object
      Date
      Array
      And 2 data types that cannot contain values:

      null
      undefined
*
*
*
*
*
*/

var assert = require('assert');

var confirm = require('../lib/confirm');

describe('confirm primitive data types', function() {

  describe('#confirmModule',function(){

    describe('#Initial test for version',function(){
      it('should print infor about module', function(){
        var version = confirm._version('1.3.0');
        console.log(version);
        assert.equal(version, true, 'is the current version');
      });
    });

    describe('#TestForNull',function(){
      it('should assert variable as null and return true', function(){
          //if notheing is passed is null
          var nullvar = confirm._null();
          console.log(nullvar);
          assert.equal(nullvar, true, 'error if not null');
      });
    });


  describe('#TestForUndefined',function(){
    it('should assert variable is undefined and return true',function(){
       var undefinedvar = confirm._undefined();
       console.log(undefinedvar);
       assert.equal(undefinedvar,true,'error if not undefined')
    });
  });

  describe('#TestForBoolean',function(){
    it('should assert variable is boolean and return true',function(){
       var booleanvar = confirm._bool(true);
       console.log(booleanvar);
       assert.equal(booleanvar,true,'error if not boolean');
       var booleanvar = confirm._bool(false);
        console.log(booleanvar);
       assert.equal(booleanvar,true,'error if not boolean')
    });
  });


  describe('#TestForNumber',function(){
    it('should assert variable is number and return true',function(){
      var testvar = 100;
       var numbervar = confirm._num(testvar);
       console.log(numbervar);
       assert.equal(numbervar,true,'error if : '+ testvar+' not number')
    });
  });

  describe('#TestForString',function(){
    it('should assert variable is string and return true',function(){
      var testvar = ''; // passes empty string '' also passes
       var stringvar = confirm._string(testvar);
       console.log(stringvar);
       assert.equal(stringvar,true,'error if : '+ testvar+' not string')

       var testvar = '100'; // passes empty string '' also passes
        var stringvar = confirm._string(testvar);
        console.log(stringvar);
        assert.equal(stringvar,true,'error if : '+ testvar+' not string');

        var testvar = 'This is a string duh!'; // passes empty string '' also passes
         var stringvar = confirm._string(testvar);
         console.log(stringvar);
         assert.equal(stringvar,true,'error if : '+ testvar+' not string')
    });
  });

  describe('#TestForInteger',function(){
    it('should assert variable is integer and return true',function(){
      var testvar = 100;
       var numbervar = confirm._int(testvar);
       console.log(numbervar);
       assert.equal(numbervar,true,'error if : '+ testvar +' not an integer');
       var testvar = -+100-9902;
        var numbervar = confirm._int(testvar);
        console.log(numbervar);
        assert.equal(numbervar,true,'error if : '+ testvar +' not an integer')
    });
  });

  describe('#TestForFloat',function(){
    it('should assert variable is float and return true',function(){
      var testvar = 100.9;
       var numbervar = confirm._float(testvar);
       console.log(numbervar);
       assert.equal(numbervar,true,'error if : '+ testvar +' not an float');
       var testvar = +100-9434.29; // can evaluate any expression ans test if it passes
        var numbervar = confirm._float(testvar);
        console.log(numbervar);
        assert.equal(numbervar,true,'error if : '+ testvar +' not an float')
    });
  });
}); // Module core


//console.log('--------------------Non primitive-------------------');

describe('Non primitive Datatypes',function(){

  describe('#Object',function(){

      it('should assert that datatype is and object and return true',function(){

        var testvar = new Object; // {} passes empty string '' also passes
         var objectvar = confirm._object(testvar);
         console.log(objectvar);
         assert.equal(objectvar,true,'error if : '+ testvar+' not an object');

         var testvar = new Object(); // passes empty string '' also passes
          var objectvar = confirm._object(testvar);
          console.log(objectvar);
          assert.equal(objectvar,true,'error if : '+ testvar+' not an object');

          var testvar = {data:{}, success: true, code:200}; // passes empty string '' also passes
           var objectvar = confirm._object(testvar);
           console.log(objectvar);
           assert.equal(objectvar,true,'error if : '+ testvar+' not an object');

            // allows for the testing of function objects
           var testvar = function(){ return true; } // passes empty string '' also passes
            var objectvar = confirm._object(testvar);
            console.log(objectvar);
            assert.equal(objectvar,true,'error if : '+ testvar+' not an object')


    });
  });

  //lets test array


  describe('#Array',function(){

      it('should assert that datatype is an array and return true',function(){
        var testvar = []; // {} passes empty string '' also passes
         var arrayvar = confirm._array(testvar);
         console.log(arrayvar);
         assert.equal(arrayvar,true,'error if : '+ testvar+' not an array');

         var testvar = new Array(); // passes empty string '' also passes
          var arrayvar = confirm._array(testvar);
          console.log(arrayvar);
          assert.equal(arrayvar,true,'error if : '+ testvar+' not an array');

          var testvar = ['string100', true, 200]; // mixed array
           var arrayvar = confirm._array(testvar);
           console.log(arrayvar);
           assert.equal(arrayvar,true,'error if : '+ testvar+' not an array ')

    });
  });


  describe('#Regex',function(){

      it('should assert that datatype is an Regex and return true',function(){
        var testvar = /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/; // date
         var regexvar = confirm._regexp(testvar);
         console.log(regexvar);
         assert.equal(regexvar,true,'error if : '+ testvar+' not a Regex');

         var testvar =/^[a-zA-Z]+$/; // alphanumeric passes empty string '' also passes
          var regexvar = confirm._regexp(testvar);
          console.log(regexvar);
          assert.equal(regexvar,true,'error if : '+ testvar+' not a Regex');

          var testvar = /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/; //password
           var regexvar = confirm._regexp(testvar);
           console.log(regexvar);
           assert.equal(regexvar,true,'error if : '+ testvar+' not a Regex ')

    });
  });



  describe('#Date',function(){
  it('shoud assert date is true when Date and return true', function(){
    var testvar  = new Date(); // test if current date is date
     var datevar = confirm._date(testvar);
     console.log(datevar);
     assert.equal(datevar,true,'error if : '+ testvar+' not a date');
  });
});


});// end non primitives


});
