const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Register
router.get('/register', (req, res) => {
  res.render('register');
});

// Login
router.get('/login', (req, res) => {
  res.render('login');
});

// Register user
router.post('/register', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let password2 = req.body.password2;

  // validations
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not much').equals(req.body.password);

  let errors = req.validationErrors();
  if (errors) {
    res.render('register', {
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });
    User.createUser(newUser, (err, user) => {
      if(err) throw err;
      console.log(user);
    });
    req.flash('success_msg', 'You are registered and can now login');
    res.redirect('/users/login');
  }
});

module.exports = router;
