var express = require('express');
var router = express.Router();
var db = require("../models")
var helpers = require('../helper/bucketLists')

router.route('/')
.get(helpers.getBucketLists)
.post(helpers.createBucketLists)

router.route('/:bucketListId')
.get(helpers.findBucketList)
.put(helpers.updateBucketList)
.delete(helpers.deleteBucketList)



module.exports = router;