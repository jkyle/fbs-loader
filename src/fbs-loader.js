const {processFBS} = require('fbs/bin/fbs');
const path = require('path');

module.exports = { default: function loader(content) {
  var callback = this.async();
  processFBS(path.resolve(this.context)).then(result =>
      callback(null, `module.exports = ${JSON.stringify(result)}`))
} };
