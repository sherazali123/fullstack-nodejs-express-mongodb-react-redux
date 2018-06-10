// keys. js
// this is will load all the configurations based on NODE_ENV
if (process.env.NODE_ENV === 'production') {
  // this is production
  module.exports = require('./prod');
} else {
  // this is development
  module.exports = require('./dev');
}
