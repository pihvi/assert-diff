"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.deepEqual = exports.deepStrictEqual = void 0;

var _assertPlus = _interopRequireDefault(require("assert-plus"));

var _jsonDiff = _interopRequireDefault(require("json-diff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AssertDiff() {
  _assertPlus.default.ok.apply(_assertPlus.default.ok, arguments);
}

AssertDiff.options = {
  strict: false
};
Object.keys(_assertPlus.default).forEach(function (k) {
  AssertDiff[k] = function () {
    _assertPlus.default[k].apply(_assertPlus.default[k], arguments);
  };
});

const deepStrictEqual = AssertDiff.deepStrictEqual = function deepStrictEqual() {
  try {
    _assertPlus.default.deepStrictEqual.apply(_assertPlus.default.deepStrictEqual, arguments);
  } catch (e) {
    throw new _assertPlus.default.AssertionError({
      message: addDiffToMessage(e.message, _jsonDiff.default.diffString(e.expected, e.actual)),
      stackStartFunction: _assertPlus.default.AssertionError
    });
  }
};

exports.deepStrictEqual = deepStrictEqual;

const deepEqual = AssertDiff.deepEqual = function deepEqual() {
  try {
    _assertPlus.default.deepEqual.apply(_assertPlus.default.deepEqual, arguments);
  } catch (e) {
    throw new _assertPlus.default.AssertionError({
      message: addDiffToMessage(e.message, _jsonDiff.default.diffString(e.expected, e.actual)),
      stackStartFunction: _assertPlus.default.AssertionError
    });
  }

  if (AssertDiff.options.strict && _jsonDiff.default.diff(arguments[0], arguments[1])) {
    throw new _assertPlus.default.AssertionError({
      message: addDiffToMessage(arguments[2], _jsonDiff.default.diffString(arguments[0], arguments[1])),
      stackStartFunction: _assertPlus.default.AssertionError
    });
  }
};

exports.deepEqual = deepEqual;

function addDiffToMessage(message, diff) {
  var msg = message ? message : '';
  var resetCliColorAttributes = '\u001b[m';
  return msg + resetCliColorAttributes + '\n' + diff;
}

AssertDiff.deepEqualOrig = _assertPlus.default.deepEqual;
var _default = AssertDiff;
exports.default = _default;
