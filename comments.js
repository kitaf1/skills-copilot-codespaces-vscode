// Create web server for comment
//==============================================================================
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var User = require('../models/user');
var Post = require('../models/post');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


