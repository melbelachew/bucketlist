var db = require('../models');
exports.getBucketLists = function(req,res){
    db.Bucket.find()
    .then(function(bucketLists){
        res.json(bucketLists);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.createBucketLists = function(req,res){
    db.Bucket.create(req.body)
    .then(function(newItem){
        res.status(201).json(newItem)
    })
}

exports.findBucketList = function(req, res){
    db.Bucket.findById(req.params.bucketListId)
    .then(function(foundList){
        res.json(foundList)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateBucketList = function(req,res){
    db.Bucket.findOneAndUpdate({_id: req.params.bucketListId}, req.body,
        {new:true})
    .then(function(bucketList){
        res.json(bucketList);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.deleteBucketList = function(req, res){
    db.Bucket.findOneAndDelete({_id:req.params.bucketListId})
    .then(function(){
        res.json({message: 'Deleted'});
    })
    .catch(function(err){
        res.send(err);
    })
}