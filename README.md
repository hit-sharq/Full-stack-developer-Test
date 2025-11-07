# Full-stack-developer-Test

MPC E-commerce Product API and Frontend Application

**By Joshua Mwendwa**

## Overview

I have built a comprehensive full-stack e-commerce application using Next.js 16, featuring a robust RESTful API for product management and a modern React frontend with TypeScript. Throughout this project, I implemented product CRUD operations, category filtering, responsive design, and integrated a PostgreSQL database with Prisma ORM. I focused on creating a scalable, maintainable codebase with clean architecture and modern development practices.

## Frontend Deliverables

### Layout Approach
I implemented a responsive grid layout using CSS Grid and Flexbox for the product cards, with a mobile-first approach that adapts from single-column on mobile to multi-column on larger screens. I used custom CSS classes instead of Tailwind to maintain full control over styling and ensure consistent design patterns.

### Responsiveness Considerations
The application features responsive breakpoints at 768px and 1024px, with product cards that stack vertically on mobile devices and display in a 2-3 column grid on tablets and desktops. I ensured touch-friendly interactions and optimized image loading for different screen sizes.

## Backend Deliverables

### Tech Stack
I used Node.js with Next.js API routes, TypeScript for type safety, and Prisma ORM for database operations with PostgreSQL. This stack provides excellent performance, type safety, and developer experience.

### How to Run the Project
Install dependencies with `npm install`, set up your PostgreSQL database, run `npx prisma db push` for migrations, then start development with `npm run dev`. The application will be available at http://localhost:3000.

### Sample API Requests
```bash
# Get all products
curl http://localhost:3000/api/products

# Filter by category
curl "http://localhost:3000/api/products?category=Electronics"

# Get specific product
curl http://localhost:3000/api/products/1
```

## What I Accomplished

### Backend Development
I created a complete RESTful API with multiple endpoints:
- **GET /api/products** - Fetches all products with optional category filtering
- **GET /api/products/[id]** - Retrieves individual products by ID
- **GET /api/products/category/[category]** - Alternative category filtering route
- **POST /api/products** - Bonus feature for creating new products

I implemented proper error handling, data validation, and followed RESTful conventions throughout the API development.

### Frontend Development
I built a responsive, modern user interface featuring:
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
- Used Neon (neondb) for cloud-hosted PostgreSQL database

### Technical Implementation
I utilized modern web technologies:
- Next.js 16 with App Router for optimal performance
- TypeScript for type safety and better developer experience
- Prisma for type-safe database operations
- Custom CSS with modern design principles
- Responsive design patterns for mobile-first development

## Features

### Backend API
- **GET /api/products** - Fetch all products or filter by category
- **GET /api/products/[id]** - Fetch a specific product by ID
- **GET /api/products/category/[category]** - Fetch products by category
- **POST /api/products** - Create new products (bonus feature)

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

- **Frontend:** Next.js 16, React 19, TypeScript
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Plain CSS with modern design
- **Deployment:** Ready for Vercel/Netlify

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

#### GET /api/products/[id]
Fetch a specific product by ID.

**Parameters:**
- `id`: Product ID (number)

**Response:** Single product object or 404 if not found

#### GET /api/products/category/[category]
Fetch products by category.

**Parameters:**
- `category`: Product category (string)

**Response:** Array of products in the specified category

#### POST /api/products
Create a new product (bonus feature).

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
- PostgreSQL database
- npm or yarn

### Installation

1. I cloned the repository and navigated to the project directory:
```bash
git clone <repository-url>
cd fullstack-developer-test
```

2. I installed all dependencies:
```bash
npm install
```

3. I set up the database with proper configuration:
```bash
# I updated .env with my PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/tst"

# I ran database migrations
npx prisma db push

# I seeded the database with sample data
npx prisma db seed
```

4. I started the development server:
```bash
npm run dev
```

5. I opened [http://localhost:3000](http://localhost:3000) in my browser to see the application.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── products/
│   │       ├── route.ts              # Main products API
│   │       ├── [id]/
│   │       │   └── route.ts          # Get product by ID
│   │       └── category/
│   │           └── [category]/
│   │               └── route.ts      # Get products by category
│   ├── components/
│   │   ├── ProductCard.tsx          # Product card component
│   │   └── ProductCard.css          # Product card styles
│   ├── page.tsx                     # Main page
│   ├── page.css                     # Page styles
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
├── prisma/
│   ├── schema.prisma                # Database schema
│   ├── seed.ts                      # Database seeding
│   └── config.ts                    # Prisma configuration
└── public/                          # Static assets
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

### Vercel (Recommended)
I prepared the application for Vercel deployment:
1. I pushed my code to GitHub
2. I connected my repository to Vercel
3. I configured environment variables in the Vercel dashboard
4. I deployed the application

### Manual Deployment
```bash
npm run build
npm start
```

## Integration/Full-Stack Deliverables

### Fully Working Full-Stack Demo
The application integrates a responsive React frontend with a robust Node.js API backend, providing a complete e-commerce product browsing experience with real-time category filtering and dynamic product display.

### Deployment Links
- **Frontend:** Deployed on Vercel at [https://joshua-mwendwa.vercel.app](https://joshua-mwendwa.vercel.app)
- **Backend API:** Hosted on Vercel serverless functions (same domain as frontend)

## Demo

- **Frontend:** [http://localhost:3000](http://localhost:3000) or [https://joshua-mwendwa.vercel.app](https://joshua-mwendwa.vercel.app)
- **API Base:** [http://localhost:3000/api/products](http://localhost:3000/api/products) or [https://joshua-mwendwa.vercel.app/api/products](https://joshua-mwendwa.vercel.app/api/products)

## Testing the API

```bash
# Get all products
curl http://localhost:3000/api/products

# Get products by category
curl "http://localhost:3000/api/products?category=Electronics"

# Get product by ID
curl http://localhost:3000/api/products/1

# Get products by category (alternative route)
curl http://localhost:3000/api/products/category/Electronics

# Create a new product
curl -X POST http://localhost:3000/api/products \
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
