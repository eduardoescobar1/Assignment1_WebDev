var express = require('express');
var router = express.Router();

/* I created this contact to have 2 templates*/
router.get('/contact', function(req, res, next) {
    res.render('index', { 
      title: 'Contact Us',
      Name: 'My name is Eduardo'
    });
  });

  
  
  module.exports = router;