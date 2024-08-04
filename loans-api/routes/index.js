var express = require('express');
var router = express.Router();

const auditModel = require('../models/audit.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
