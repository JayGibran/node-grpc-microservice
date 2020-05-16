const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nix', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});