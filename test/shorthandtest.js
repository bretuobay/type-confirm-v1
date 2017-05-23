var assert = require('assert');

var confirm = require('../lib/confirm');

var cleanex = require('../lib/index');


describe("#Testing loading for cleanex ", function() {
  describe("should load utility module and call some utility functions ", function() {
    it("it should return true", function() {
      //var testvar = cleanex.ct(confirm._bool,'true');
      // console.log(cleanex)
        var testvar = cleanex.ct('_bool',true);
      console.log(testvar);
      assert.equal(testvar, true, 'error if not boolean');

    });

    it("it should return true", function() {
      //var testvar = cleanex.ct(confirm._bool,'true');
        var testvar = cleanex.ct('_int',12);
      console.log(testvar);
      assert.equal(testvar, true, 'error if not int');
    });

    it("it should return true", function() {
      //var testvar = cleanex.ct(confirm._bool,'true');
        var testvar = cleanex.ct('_float',12.2);
      console.log(testvar);
      assert.equal(testvar, true, 'error if not float');
    });

    it("it should return true", function() {
        var testvar = cleanex.ct('_string','hshshs');
      console.log(testvar);
      assert.equal(testvar, true, 'error if not string');
    });

    it("it should return true", function() {
        var testvar = cleanex.ct('_date', new Date());
      console.log(testvar);
      assert.equal(testvar, true, 'error if not date');
    });

    it("it should return true", function() {
        var testvar = cleanex.ct('_object', new Date()); // date is object  and passes
      console.log(testvar);
      assert.equal(testvar, true, 'error if not object');
    });

    it("it should return true", function() {
        var testvar = cleanex.ct('_null'); //TODO : Failing, if nothing is passed, is dull
      console.log(testvar);
      assert.equal(testvar, true, 'error if not null variable');
    });

    it("it should return true", function() {
        var testvar = cleanex.ct('_version','1.3.0'); //TODO : Failing
      console.log(testvar);
      assert.equal(testvar, true, 'error if not null test version');
    });


  });

});
