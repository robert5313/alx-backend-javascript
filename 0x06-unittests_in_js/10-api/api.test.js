'use strict';
const request = require('supertest');
const app = require('./api');

describe('GET /available_payments', () => {
  it('should return the available payment methods', async () => {
    const response = await request(app).get('/available_payments');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('POST /login', () => {
  it('should return a welcome message with the username', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome Betty');
  });
});
