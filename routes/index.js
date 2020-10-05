const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const Unsplash = require('unsplash-js').default;
const {toJson} = require('unsplash-js');
const unsplash = new Unsplash({accessKey:process.env.myAccessKey});


module.exports = router;