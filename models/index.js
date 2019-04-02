var mongoose = require ('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb:mongodb+srv://melb123:melb123@cluster0-svmfu.mongodb.net/test?retryWrites=true');

mongoose.Promise = Promise;
module.exports.Bucket = require('./bucketList')

