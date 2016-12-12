# Descritpion type-confirm

The module type-confirm is a set of well tested functions to test truthiness of
 JavaScript primitive data types and non-primitive data types and other data types.

 Originally created for studies purposes, It is well tested and follows TDD principles
 using the following stack:

### Tech stack
```
  Nodejs
  Mochajs
  ES6
  NPM
  Atom
  Git
```
### Usage
The module can be installed by :

```
npm install type-confirm

```
The following data types can be tested for truthiness:

```
var ct = require('type-confirm');

var bool_var = ct.confirm_type('_bool',true);

var int_var = ct.confirm_type('_int',10);

var float_var = ct.confirm_type('_float',10.99);

var string_var = ct.confirm_type('_string',"some-random-string");

var num_var = ct.confirm_type('_num',1202);

var undefined_var = ct.confirm_type('_undefined',undefined);


from version 1.2.1, use short hand

var bool_var = ct.ct('_bool',true);

var int_var = ct.ct('_int',10);

var float_var = ct.ct('_float',10.99);

var string_var = ct.ct('_string',"some-random-string");

var num_var = ct.ct('_num',1202);

var undefined_var = ct.ct('_undefined',undefined);



ecc...


```

Clone from git  and run npm test
