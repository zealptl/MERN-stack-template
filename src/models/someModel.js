const mongoose = require('mongoose');

const something = mongoose.Schema({
  // document schema
});

module.exports = mongoose.model('SomeModel', something);
