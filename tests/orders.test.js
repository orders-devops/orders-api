const request = require('supertest');
const app = require('../src/app');

describe('GET /orders', () => {
  it('returns all orders sorted by date', async () => {
    const res = await request(app).get('/orders');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(4);
    expect(res.body.map((o) => o.id)).toEqual([103, 101, 102, 104]);
  });
});
