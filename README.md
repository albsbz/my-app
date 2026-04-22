# Redi Store App

Redi Store App is a storefront built with the Next.js App Router, React 19, and Tailwind CSS 4. It uses the DummyJSON products API and includes product browsing, filtering, favorites, and a client-side shopping cart with persisted state.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Heroicons

## Getting Started

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

4. Open `http://localhost:3000` in your browser.

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

## Features

- Product catalog backed by the DummyJSON products API.
- Product details page at `/product/[id]`.
- Debounced search, category filtering, and sorting controls.
- Favorites page with persisted favorite products.
- Shopping cart with quantity aggregation and total price calculation.
- Cart and favorites persistence in `localStorage`.
- Shared state management through React context providers.
- Loading, error, and notification UI for async flows.

## Routes

- `/` shows the storefront home page and product catalog.
- `/favorites` shows saved favorite products.
- `/cart` shows the shopping cart and total amount.
- `/product/[id]` shows a single product view.

## Project Structure

```text
app/
	(shop)/
		layout.jsx
		page.jsx
		cart/
		favorites/
		product/[id]/
	_components/
		common/
		providers/
	_context/
	_hooks/
	_services/
	_utils/
```

## Notes

- Product and category data are fetched from the configured API base URL.
- Cart and favorites are restored from browser storage when the app loads.
