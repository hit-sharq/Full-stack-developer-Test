# Full-Stack Developer Test TODO List

## Overview
- **Objective**: Build and integrate frontend (React + TypeScript) and backend (Node.js + TypeScript + Prisma) for an e-commerce product API and UI.
- **Time Limit**: 2 hours total (approx. 1h backend, 1h frontend, 1h integration).
- **Tech Stack**: Backend - Node.js, TypeScript, Prisma ORM (SQLite/PostgreSQL). Frontend - React, TypeScript.
- **Deliverables**: API docs, frontend demo, integration demo, deployment links, README notes.

## Backend Task (Node.js + TypeScript + Prisma)
- [ ] Set up Node.js project with TypeScript.
- [ ] Install dependencies: Express, Prisma, TypeScript, etc.
- [ ] Configure Prisma with SQLite database.
- [ ] Define Product model in Prisma schema (id, name, price, category, variants, availability).
- [ ] Generate Prisma client and run migrations.
- [ ] Implement GET /products endpoint (list all products).
- [ ] Implement GET /products/:id endpoint (single product).
- [ ] Implement GET /products/:category endpoint (filter by category).
- [ ] Implement POST /products endpoint (add new product with validation) - Bonus.
- [ ] Add error handling and validation.
- [ ] Create API documentation (Postman/Swagger or README).
- [ ] Add README note: Tech stack, how to run (npm install && npm run dev), sample curl/Postman requests.
- [ ] Test endpoints locally.

## Frontend Task (React + TypeScript)
- [ ] Set up React project with TypeScript (e.g., Create React App or Vite).
- [ ] Install dependencies: React, TypeScript, any UI libraries if needed.
- [ ] Create Product Card component with:
  - Product image
  - Product name
  - Product price
  - Dropdown/label for variant options
  - "Add to Cart" button (disabled/replaced with "Out of Stock" if unavailable)
- [ ] Ensure responsive design and modern UI/UX.
- [ ] Add README note: Layout approach, responsiveness considerations.
- [ ] Deploy demo to Netlify/Vercel/GitHub Pages.

## Integration Task
- [ ] Connect frontend to backend API.
- [ ] Fetch product data from GET /products and display in Product Card(s).
- [ ] Dynamically update button state based on availability ("Add to Cart" vs. "Out of Stock").
- [ ] Implement category filtering using GET /products?category=.
- [ ] Bonus: Implement Add to Cart functionality with local state or context.
- [ ] Test full integration locally.
- [ ] Deploy backend to Render/Railway/Heroku.
- [ ] Update frontend deployment to use live backend URL.
- [ ] Provide final deployment links for both frontend and backend.

## General
- [ ] Ensure total time does not exceed 2 hours.
- [ ] Document any issues or deviations in README.
- [ ] Prepare for submission: Confirmation email, attach outputs as per instructions.
