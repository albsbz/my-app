# Redi Store App

Redi Store App is a small storefront built with Next.js App Router, React 19, and Tailwind CSS. It consumes the DummyJSON products API and includes product discovery, category filtering, favorites, and a client-side shopping cart.

## Project Bootstrap

This project was bootstrapped with `create-next-app` and then extended into a multi-route shop experience using the App Router.

Core stack:

- Next.js 16
- React 19
- Tailwind CSS 4
- Heroicons

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
cp example.env .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in the browser.

## Environment Variables

The app expects the following public environment variable:

```env
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.
- `npm run lint:fix` runs ESLint with automatic fixes.

## Implemented Features

- Product listing page backed by the DummyJSON products API.
- Product details page at `/product/[id]`.
- Debounced search for products by title.
- Category-based filtering with toggle controls.
- Favorites page with persisted favorite products.
- Shopping cart with quantity aggregation and total price calculation.
- Cart and favorites persistence in `localStorage`.
- Shared state management through React context providers.
- Loading and error UI for asynchronous product and category fetches.

## Routes

- `/` shows the storefront home page and product catalog.
- `/favorites` shows saved favorite products.
- `/cart` shows the shopping cart and total amount.
- `/product/[id]` shows a single product view.

## Project Structure

```text
app/
	(shop)/
		cart/
		favorites/
		product/[id]/
	_components/
	_context/
	_hooks/
	_services/
	_utils/
```

## Notes

- Product and category data are fetched from the configured API base URL.
- Cart and favorites are managed on the client side and restored from browser storage on load.
