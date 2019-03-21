var mongoose = require ('mongoose');

var bucketListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'Name cannot be blank'
    },
    completed:{
        type:Boolean,
        default:false
    },
    created_date:{
        type:Date,
        default:Date.now
    }

})

var Bucket = mongoose.model('Bucket', bucketListSchema);

module.exports = Bucket;

// name
// completed
// created date