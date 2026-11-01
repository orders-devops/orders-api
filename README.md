# orders-api

A small Node.js/Express service that exposes customer orders for internal dashboards.

## Endpoints

- `GET /health` – service health check
- `GET /orders` – list of orders, most recent first

## Development

```bash
npm install
npm start      # http://localhost:3000
npm test
npm run lint
```

Requires Node.js 20 or later.
