const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);


mongoose.connect('mongodb://localhost:27017/agenda',{ useNewUrlParser: true });

mongoose.Promise = global.Promise;


module.exports = mongoose ;