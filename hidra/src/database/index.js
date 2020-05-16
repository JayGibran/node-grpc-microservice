const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hidra', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});