var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

//Home
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

//home page
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About'
  });
});

//Project
router.get('/project', function(req, res, next) {
  res.render('index', { 
    title: 'Project'
  });
});

//Services
router.get('/services', function(req, res, next) {
  res.render('index', { 
    title: 'Services'
  });
});

//Contact
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Us',
    Name: 'My name is Eduardo'
  });
});



module.exports = router;
