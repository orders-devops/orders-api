function sortOrders(orders) {
  return orders
    .slice()
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

module.exports = sortOrders;
