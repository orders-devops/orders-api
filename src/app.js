const express = require('express');
const orders = require('./orders');
const sortOrders = require('./sortOrders');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/orders', (req, res) => {
  res.json(sortOrders(orders));
});

module.exports = app;
