function sortOrders(orders) {
  return orders.toSorted(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

module.exports = sortOrders;
