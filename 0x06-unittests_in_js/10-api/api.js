'use strict';
const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    credit_cards: true,
    paypal: false
  };
  res.json({ payment_methods: paymentMethods });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
