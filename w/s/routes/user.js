'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  //このパスがよくわからない
  res.render('user', {
    title: '新規会員登録'
  });
});

router.post('/', function(req, res, next) {
  const createdAt = new Date();

  User.create({

    email : req.body.email,   
    user_name : req.body.name,   
    password : req.body.password,
    created_at :createdAt
    
  }).then((user) => {
    email :req.body.email
    user_name : req.body.comment
    password : req.body.password
  });
    res.redirect('https://www.google.com/');


});

module.exports = router;
