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

## License ##
Apache 2.0
