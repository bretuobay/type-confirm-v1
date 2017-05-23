var assert = require('assert');

var confirm = require('../lib/confirm');

var cleanex = require('../lib/index');


describe("Testing suite for making object directly queryable ", function() {
  it("it should return true for a boolean", function() {
    //var testvar = cleanex.confirm_type(confirm._bool,'true');
    var testvar = cleanex._bool(true);
    console.log(testvar);
    assert.equal(testvar, true, 'error if not boolean');

  });


  it("it should return true for a string", function() {
    //var testvar = cleanex.confirm_type(confirm._bool,'true');
    var testvar = cleanex._string('This is a random string');
    console.log(testvar);
    assert.equal(testvar, true, 'error if not string');

  });

  it("it should return true for an integer", function() {
    //var testvar = cleanex.confirm_type(confirm._bool,'true');
    var testvar = cleanex._int(50);
    console.log(testvar);
    assert.equal(testvar, true, 'error if not boolean');

  });


  it("it should return true", function() {
    //var testvar = cleanex.confirm_type(confirm._bool,'true');
      var testvar = cleanex._float(12.2);
    console.log(testvar);
    assert.equal(testvar, true, 'error if not float');
  });


  it("it should return true for date", function() {
      var testvar = cleanex._date(new Date());
    console.log(testvar);
    assert.equal(testvar, true, 'error if not date');
  });

  it("it should return true for date/object", function() {
      var testvar = cleanex._object(new Date()); // date is object  and passes
    console.log(testvar);
    assert.equal(testvar, true, 'error if not object');
  });

  it("it should return null params", function() {
      var testvar = cleanex._null(); //TODO : Failing, if nothing is passed, is dull
    console.log(testvar);
    assert.equal(testvar, true, 'error if not null variable');
  });

  it("it should return true for correct version", function() {
      var testvar = cleanex._version('1.3.0'); //TODO : Failing
    console.log(testvar);
    assert.equal(testvar, true, 'error if not null test version');
  });


});


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
        var testvar = cleanex.confirm_type('_null'); //TODO : Failing, if nothing is passed, is dull
      console.log(testvar);
      assert.equal(testvar, true, 'error if not null variable');
    });

    it("it should return true", function() {
        var testvar = cleanex.confirm_type('_version','1.3.0'); //TODO : Failing
      console.log(testvar);
      assert.equal(testvar, true, 'error if not null test version');
    });


  });

});
