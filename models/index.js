var mongoose = require ('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/bucketList-api');

mongoose.Promise = Promise;
module.exports.Bucket = require('./bucketList')

