# Refactor from Next.js to Separate Frontend and Backend

## Steps to Complete

- [ ] Create backend directory structure (backend/src/, backend/prisma/)
- [ ] Set up backend package.json with Node.js + TypeScript + Express + Prisma dependencies
- [ ] Create backend/tsconfig.json
- [ ] Move and adapt API routes from app/api/products/ to backend/src/routes/products.ts (convert to Express routes)
- [ ] Create backend/src/server.ts with Express server setup, including Prisma client and CORS
- [ ] Copy and adjust Prisma schema and seed to backend/prisma/
- [ ] Create frontend directory structure (frontend/src/, frontend/public/)
- [ ] Set up frontend package.json with React + TypeScript + Vite dependencies
- [ ] Create frontend/vite.config.ts
- [ ] Create frontend/index.html
- [ ] Move and adapt React components from app/ to frontend/src/ (e.g., App.tsx from page.tsx, ProductCard.tsx)
- [ ] Update frontend to fetch from backend API (e.g., http://localhost:3001/api/products)
- [ ] Remove Next.js specific files (next.config.ts, app/ directory, etc.)
- [ ] Update root package.json to remove Next.js dependencies
- [ ] Install backend dependencies
- [ ] Install frontend dependencies
- [ ] Run Prisma migrations and seed in backend
- [ ] Start backend server
- [ ] Start frontend dev server
- [ ] Test API endpoints and frontend functionality
- [ ] Handle any CORS or port issues
