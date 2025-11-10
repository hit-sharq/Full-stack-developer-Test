# Full-stack-developer-Test

MPC E-commerce Product API and Frontend Application

**By Joshua Mwendwa**

## Overview

I have built a comprehensive full-stack e-commerce application using the specified tech stack: React + TypeScript for the frontend, Node.js + TypeScript for the backend, Prisma ORM for database interactions, and PostgreSQL (hosted on Neon) for the database. Originally started with Next.js 16, but refactored to separate the frontend and backend for better scalability and maintainability. The application features a robust RESTful API for product management and a modern React frontend with TypeScript. Throughout this project, I implemented product CRUD operations, category filtering, responsive design, and integrated the database with Prisma ORM. I focused on creating a scalable, maintainable codebase with clean architecture and modern development practices.

## Frontend Deliverables

### Layout Approach
I implemented a responsive grid layout using CSS Grid and Flexbox for the product cards, with a mobile-first approach that adapts from single-column on mobile to multi-column on larger screens. I used custom CSS classes instead of Tailwind to maintain full control over styling and ensure consistent design patterns.

### Responsiveness Considerations
The application features responsive breakpoints at 768px and 1024px, with product cards that stack vertically on mobile devices and display in a 2-3 column grid on tablets and desktops. I ensured touch-friendly interactions and optimized image loading for different screen sizes.

## Backend Deliverables

### Tech Stack
I used React + TypeScript for the frontend (built with Vite), Node.js + TypeScript + Express for the backend, and Prisma ORM for database operations with PostgreSQL (hosted on Neon). This stack provides excellent performance, type safety, and developer experience.

### How to Run the Project

#### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file
4. Run migrations: `npx prisma migrate deploy`
5. Seed database: `npx prisma db seed`
6. Start backend: `npm run dev` (runs on http://localhost:3001)

#### Frontend Setup
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start frontend: `npm run dev` (runs on http://localhost:3000)

### Sample API Requests
```bash
# Get all products
curl http://localhost:3001/api/products

# Filter by category
curl "http://localhost:3001/api/products?category=Electronics"

# Create new product
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","price":10,"category":"Test","variants":[],"available":true}'
```

## What I Accomplished

### Backend Development
I created a complete RESTful API with Express server:
- **GET /api/products** - Fetches all products with optional category filtering
- **POST /api/products** - Creates new products

I implemented proper error handling, data validation, CORS support, and followed RESTful conventions throughout the API development.

### Frontend Development
I built a responsive, modern user interface with React and Vite featuring:
- Custom product cards with hover effects and smooth animations
- Dynamic category filtering functionality
- Responsive grid layout that adapts to different screen sizes
- Professional loading and error states
- Clean, accessible design using plain CSS

I replaced Tailwind CSS with custom CSS to demonstrate my styling capabilities and maintain full control over the visual design.

## Database Integration
I set up a PostgreSQL database using Prisma ORM with Neon for online hosting:
- Designed a comprehensive Product model with variants, availability tracking, and image support
- Created database migrations and seeding scripts
- Implemented proper data relationships and constraints
- Ensured data integrity and efficient querying
- Used Neon for cloud-hosted PostgreSQL database

### Technical Implementation
I utilized modern web technologies:
- React with Vite for fast development and building
- Node.js with Express for robust backend API
- TypeScript for type safety and better developer experience
- Prisma for type-safe database operations
- Custom CSS with modern design principles
- Responsive design patterns for mobile-first development
- Neon for PostgreSQL hosting

## Features

### Backend API
- **GET /api/products** - Fetch all products or filter by category
- **POST /api/products** - Create new products

### Frontend
- Modern product cards with hover effects and animations
- Category filtering
- Responsive grid layout
- Loading and error states
- Built with plain CSS for custom styling

### Database
- PostgreSQL database with Prisma ORM
- Product model with variants, availability, and image support

## Tech Stack

- **Frontend:** React + TypeScript (using Vite for build tool)
- **Backend:** Node.js + TypeScript + Express
- **Database:** PostgreSQL with Prisma ORM (hosted on Neon)
- **Styling:** Plain CSS with modern design
- **Deployment:** Frontend on Vercel, Backend on Vercel/Railway/Render

## API Documentation

### Endpoints

#### GET /api/products
Fetch all products or filter by category.

**Query Parameters:**
- `category` (optional): Filter products by category

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 99.99,
    "category": "Electronics",
    "variants": ["Black", "White", "Blue"],
    "available": true,
    "imageUrl": "https://via.placeholder.com/300x200?text=Headphones",
    "createdAt": "2025-01-07T08:49:02.000Z",
    "updatedAt": "2025-01-07T08:49:02.000Z"
  }
]
```

#### POST /api/products
Create a new product.

**Request Body:**
```json
{
  "name": "New Product",
  "price": 29.99,
  "category": "Electronics",
  "variants": ["Red", "Blue"],
  "available": true,
  "imageUrl": "https://example.com/image.jpg"
}
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (or Neon for cloud)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
```bash
git clone <repository-url>
cd fullstack-developer-test
```

#### Backend Setup
2. Navigate to backend directory:
```bash
cd backend
```

3. Install backend dependencies:
```bash
npm install
```

4. Set up environment variables:
Create a `.env` file in the backend directory:
```
DATABASE_URL="your_postgresql_connection_string"
PORT=3001
```

5. Run database migrations:
```bash
npx prisma migrate deploy
```

6. Seed the database:
```bash
npx prisma db seed
```

7. Start the backend server:
```bash
npm run dev
```
Backend will run on http://localhost:3001

#### Frontend Setup
8. Open a new terminal and navigate to frontend directory:
```bash
cd ../frontend
```

9. Install frontend dependencies:
```bash
npm install
```

10. Start the frontend development server:
```bash
npm run dev
```

11. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma             # Database schema
│   │   ├── seed.ts                   # Database seeding
│   │   └── migrations/               # Database migrations
│   ├── src/
│   │   ├── routes/
│   │   │   └── products.ts           # Products API routes
│   │   └── server.ts                 # Express server setup
│   ├── package.json                  # Backend dependencies
│   └── tsconfig.json                 # TypeScript config
├── frontend/
│   ├── public/                       # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.tsx       # Product card component
│   │   │   └── ProductCard.css       # Product card styles
│   │   ├── App.tsx                   # Main React component
│   │   ├── main.tsx                  # React entry point
│   │   ├── App.css                   # App styles
│   │   └── index.css                 # Global styles
│   ├── index.html                    # HTML template
│   ├── package.json                  # Frontend dependencies
│   ├── tsconfig.json                 # TypeScript config
│   └── vite.config.ts                # Vite configuration
└── README.md                         # Project documentation
```

## Database Schema

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  price       Float
  category    String
  variants    String[]
  available   Boolean  @default(true)
  imageUrl    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Deployment

### Backend Deployment
- Deploy to Vercel, Railway, Render, or Heroku
- Set environment variables for DATABASE_URL and PORT
- Run migrations and seed on deployment

### Frontend Deployment
- Deploy to Vercel
- Update API base URL in frontend to point to deployed backend
- Build and deploy static files

### Manual Deployment
```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
# Serve dist/ folder with any static server
```

## Integration/Full-Stack Deliverables

### Fully Working Full-Stack Demo
The application integrates a responsive React frontend with a robust Node.js Express API backend, providing a complete e-commerce product browsing experience with real-time category filtering and dynamic product display.

### Deployment Links
- **Frontend:** Deployed on Vercel at [https://joshua-mwendwa.vercel.app](https://joshua-mwendwa.vercel.app)
- **Backend API:** Deploy to Vercel/Railway/Render

## Demo

- **Frontend:** [http://localhost:3000](http://localhost:3000) or [https://joshua-mwendwa.vercel.app](https://joshua-mwendwa.vercel.app)
- **Backend API:** [http://localhost:3001](http://localhost:3001)
- **API Base:** [http://localhost:3001/api/products](http://localhost:3001/api/products)

## Testing the API

```bash
# Get all products
curl http://localhost:3001/api/products

# Get products by category
curl "http://localhost:3001/api/products?category=Electronics"

# Create a new product
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "price": 19.99,
    "category": "Test",
    "variants": ["Test"],
    "available": true
  }'
```

## Key Achievements

Throughout this project, I demonstrated:
- Full-stack development proficiency with modern technologies
- Clean code architecture and best practices
- API design and implementation
- Database design and ORM usage
- Responsive frontend development
- Custom CSS styling without frameworks
- TypeScript integration for type safety
- Error handling and user experience considerations
- Documentation and testing practices

## Contact

- **Instagram:** [@j_l_e_e087](https://www.instagram.com/j_lee087?igsh=MThweHgzMTJjamNyZg==)
- **WhatsApp:** [+25492687584](https://wa.me/+25492687584)
- **GitHub:** [hit-sharq](https://github.com/hit-sharq)
- **Portfolio:** [joshua-mwendwa.vercel.app](https://joshua-mwendwa.vercel.app)
- **LinkedIn:** [Joshua Mwendwa](https://www.linkedin.com/in/joshua-mwendwa-b183b5287/)
- **Email:** officialjoshuamwendwa@gmail.com

## License

MIT License

Copyright (c) 2025 joshua mwendwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
