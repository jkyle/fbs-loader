const {processFBS} = require('fbs/bin/fbs');

module.exports = { default: function loader(content) {
  var callback = this.async();
  processFBS(path.resolve(this.context)).then(result =>
      callback(null, `module.exports = ${JSON.stringify(result)}`))
} };
