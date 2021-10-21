const dbConfig = require('../config/keys.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.mongodb.dbURI;
db.Course = require('./courseModel.js')(mongoose);
db.Flow = require('./flowModel.js')(mongoose);
db.Major = require('./majorModel.js')(mongoose);
db.User = require('./userModel.js')(mongoose);

module.exports = db;
