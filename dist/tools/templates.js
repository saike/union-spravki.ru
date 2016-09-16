'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalTemplateContext = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let GlobalTemplateContext = exports.GlobalTemplateContext = {

  context: {},

  add: merged => {
    _lodash2.default.merge(GlobalTemplateContext.context, merged);
  }

};