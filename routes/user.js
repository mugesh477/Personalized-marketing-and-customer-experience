const express = require('express');
const router = express.Router();
const { createUser } = require('../models/User');
const { sendEmail } = require('../utils/mailer');

router.post('/register', (req, res) => {
  const user = createUser(req.body);
  sendEmail(user.email, "Welcome to Personalized Marketing!");
  res.status(201).json(user);
});

module.exports = router;