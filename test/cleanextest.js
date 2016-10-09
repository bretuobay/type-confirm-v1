var assert = require('assert');

var confirm = require('../lib/confirm');

var cleanex = require('../lib/index');


describe("#Testing loading for cleanex ", function() {
  describe("should load utility module and call some utility functions ", function() {
    it("it should return true", function() {
      //var testvar = cleanex.confirm_type(confirm._bool,'true');
        var testvar = cleanex.confirm_type('_bool',true);
      console.log(testvar);
      assert.equal(testvar, true, 'error if not boolean');

    });

    it("it should return true", function() {
      //var testvar = cleanex.confirm_type(confirm._bool,'true');
        var testvar = cleanex.confirm_type('_int',12);
      console.log(testvar);
      assert.equal(testvar, true, 'error if not int');
    });

    it("it should return true", function() {
      //var testvar = cleanex.confirm_type(confirm._bool,'true');
        var testvar = cleanex.confirm_type('_float',12.2);
      console.log(testvar);
      assert.equal(testvar, true, 'error if not float');
    });

    it("it should return true", function() {
        var testvar = cleanex.confirm_type('_string','hshshs');
      console.log(testvar);
      assert.equal(testvar, true, 'error if not string');
    });

    it("it should return true", function() {
        var testvar = cleanex.confirm_type('_date', new Date());
      console.log(testvar);
      assert.equal(testvar, true, 'error if not date');
    });

    it("it should return true", function() {
        var testvar = cleanex.confirm_type('_object', new Date()); // date is object  and passes
      console.log(testvar);
      assert.equal(testvar, true, 'error if not object');
    });

    it("it should return true", function() {
        var testvar = cleanex.confirm_type('_null',null); //TODO : Failing
      console.log(testvar);
      assert.equal(testvar, true, 'error if not null variable');
    });

    it("it should return true", function() {
        var testvar = cleanex.confirm_type('_version','1.0.0'); //TODO : Failing
      console.log(testvar);
      assert.equal(testvar, true, 'error if not null test version');
    });


  });

});
