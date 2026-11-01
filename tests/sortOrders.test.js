const sortOrders = require('../src/sortOrders');

describe('sortOrders', () => {
  const input = [
    { id: 1, createdAt: '2026-03-01T00:00:00Z' },
    { id: 2, createdAt: '2026-01-15T00:00:00Z' },
    { id: 3, createdAt: '2026-02-10T00:00:00Z' }
  ];

  it('orders by createdAt', () => {
    expect(sortOrders(input).map((o) => o.id)).toEqual([2, 3, 1]);
  });

  it('does not mutate the original array', () => {
    const copy = input.map((o) => ({ ...o }));
    sortOrders(input);
    expect(input).toEqual(copy);
  });
});
