[![Greenkeeper badge](https://badges.greenkeeper.io/pihvi/assert-diff.svg)](https://travis-ci.org/pihvi/assert-diff) [![Known Vulnerabilities](https://snyk.io/test/npm/assert-diff/badge.svg)](https://snyk.io/test/npm/assert-diff)

Drop-in replacement for assert to give colored diff on command-line with deepEqual.

This exists to give better diff on error when comparing objects or arrays with Mocha.

Should work on *nix shells.

Also has more asserts from https://npmjs.org/package/assert-plus

## Usage ##

```javascript
var assert = require('assert-diff')

it('diff deep equal with message', function() {
  assert.deepEqual({pow: "boom", same: true, foo: 2}, {same: true, bar: 2, pow: "bang"}, "this should fail")
})
```
Should give you:

![](https://raw.github.com/pihvi/assert-diff/master/test/example.png)

## Strict mode ##
By default everything works as with Node's deepEqual. Using strict mode is probably what you want. At least is for me.
The following example will pass with Node's deepEqual but will fail using strict mode:
```javascript
var assert = require('assert-diff')
assert.options.strict = true

it('strict diff deep equal', function() {
  assert.deepEqual({a: 1, b: 2}, {a: true, b: "2"}, "this should fail")
})
```
Should give you:

![](https://raw.github.com/pihvi/assert-diff/master/test/example2.png)

## Release notes ##

###  2.0.3 July 30, 2018  ###
- Switch to webpack to enable assert(true) style

###  2.0.2 July 30, 2018  ###
- Fix usage with assert(true) style

###  2.0.1 July 30, 2018  ###
- Fix v. 2.0.0 by adding the built index.js

###  2.0.0 July 30, 2018  ###
- Migrate to ES Modules https://github.com/pihvi/assert-diff/pull/17
- Upgrade deps
- Thanks @59naga!

###  1.2.6 Apr 14, 2018  ###
- Add security build and badges
- Upgrade deps

###  1.2.4 Oct 3, 2017  ###
- Upgrade deps

###  1.2.3 Sep 10, 2017  ###
- Upgrade json-diff to 0.5.2

###  1.2.2 Aug 20, 2017  ###
- Upgrade json-diff to 0.5.1

###  1.2.1 Aug 15, 2017  ###
- Add npm lock file

###  1.2.0 Mar 11, 2017  ###
- Support Node 7
- Diff shown when loggin error object
- Supports diff in assert.deepStrictEqual

###  1.1.1 Mar 11, 2017  ###
- fix console log example to support Node 7 

###  1.1.0 Aug 19, 2016  ###
- Upgrade assert-plus 0.1.5 -> 1.0.0 

###  1.0.1 Feb 18, 2015  ###
- Default behaviour back to non strict to be drop-in replacement for Node assert

###  1.0.0 Feb 18, 2015  ###
- Support assert in constructor e.g. assert(true)

###  0.0.x before 2015 ###
- Initial implementation

## License ##
Apache 2.0
