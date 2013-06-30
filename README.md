Drop-in replacement for assert to give diff on deepEqual.

This exists to give better diff on error when comparing objects with Mocha.

## Usage ##
```javascript
var assert = require('assert-diff')

assert.deepEqual({pow: "boom", foo: 2}, {bar: 2, pow: "bang"})
```

## License ##
Apache 2.0
