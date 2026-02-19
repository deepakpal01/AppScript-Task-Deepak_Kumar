# Product Listing Page (PLP) - Appscrip Task Deepak Pal

## Original Problem Statement
Implement a Product Listing Page based on Figma design using:
- Next.js framework with SSR
- FakeStore API for product data
- Responsive design for mobile, tablet, desktop
- SEO optimization (title, description, H1/H2, schema, alt text)
- Clean code structure with minimal DOM

## Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Data Fetching**: Server-side with fetch API (SSR)
- **API**: FakeStore API (https://fakestoreapi.com/)

## User Personas
1. **Shoppers**: Browse and discover products with filtering/sorting
2. **Mobile Users**: Access the store on mobile devices with responsive UI
3. **Search Engines**: Index products with proper SEO markup

## Core Requirements
- [x] Header with navigation, search, wishlist, cart icons
- [x] Hero banner with "DISCOVER OUR PRODUCTS" heading
- [x] Product grid with images, titles, prices, ratings
- [x] Filter sidebar (collapsible)
- [x] Sort dropdown (price, popularity, etc.)
- [x] Footer with newsletter, links, social icons
- [x] Responsive design (375px, 768px, 1920px)
- [x] SEO: meta tags, schema.org JSON-LD, H1/H2 tags

## What's Been Implemented (Feb 2026)
- Next.js 14 app with SSR
- Product listing from FakeStore API (20 products)
- Responsive header with mobile menu
- Filter sidebar with categories
- Product cards with wishlist functionality
- Footer with newsletter signup
- Complete SEO implementation

## Backlog
- P1: Product detail page
- P1: Search functionality
- P2: Shopping cart
- P2: User authentication
- P3: Checkout flow

## Next Tasks
1. Add pagination for products
2. Implement actual filter functionality
3. Add product categories filtering
