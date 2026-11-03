const request = require('supertest');
const app = require('../src/app');

describe('GET /orders', () => {
  it('returns all orders with the most recent first', async () => {
    const res = await request(app).get('/orders');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(4);
    expect(res.body.map((o) => o.id)).toEqual([104, 102, 101, 103]);
  });
});
