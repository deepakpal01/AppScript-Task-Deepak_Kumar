'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import Image from 'next/image'

// Filter sidebar component
function FilterSidebar({ categories, filters, setFilters, isOpen, setIsOpen }) {
  const [expandedSections, setExpandedSections] = useState({
    customizable: true,
    idealFor: true,
    occasion: true,
    work: true,
    fabric: true,
    segment: true,
    suitableFor: true,
    rawMaterials: true,
    pattern: true,
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const filterSections = [
    { id: 'idealFor', label: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    { id: 'occasion', label: 'OCCASION', options: ['Casual', 'Formal', 'Party', 'Wedding'] },
    { id: 'work', label: 'WORK', options: ['Office', 'Outdoor', 'Indoor'] },
    { id: 'fabric', label: 'FABRIC', options: ['Cotton', 'Silk', 'Polyester', 'Wool', 'Linen'] },
    { id: 'segment', label: 'SEGMENT', options: ['Premium', 'Luxury', 'Economy'] },
    { id: 'suitableFor', label: 'SUITABLE FOR', options: ['Summer', 'Winter', 'All Season'] },
    { id: 'rawMaterials', label: 'RAW MATERIALS', options: ['Natural', 'Synthetic', 'Blended'] },
    { id: 'pattern', label: 'PATTERN', options: ['Solid', 'Striped', 'Printed', 'Checkered'] },
  ]

  return (
    <aside 
      className={`
        filter-sidebar bg-white w-full lg:w-64 lg:min-w-64 
        ${isOpen ? 'open' : ''} 
        lg:relative lg:transform-none lg:h-auto
        overflow-y-auto
      `}
      data-testid="filter-sidebar"
    >
      {/* Mobile close button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
        <span className="font-medium uppercase tracking-wider">Filters</span>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2"
          aria-label="Close filters"
          data-testid="close-filters-btn"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="p-4 lg:p-0 lg:pr-6">
        {/* Customizable section */}
        <div className="border-b border-border pb-4 mb-4">
          <div 
            className="flex items-center justify-between cursor-pointer py-2"
            onClick={() => toggleSection('customizable')}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox"
                className="custom-checkbox"
                checked={filters.customizable}
                onChange={(e) => setFilters(prev => ({ ...prev, customizable: e.target.checked }))}
                data-testid="customizable-checkbox"
              />
              <span className="text-sm uppercase tracking-wider">CUSTOMIZABLE</span>
            </label>
          </div>
        </div>

        {/* Dynamic filter sections */}
        {filterSections.map((section) => (
          <div key={section.id} className="border-b border-border pb-4 mb-4">
            <button
              className="flex items-center justify-between w-full py-2"
              onClick={() => toggleSection(section.id)}
              data-testid={`filter-${section.id}-toggle`}
            >
              <span className="text-sm uppercase tracking-wider">{section.label}</span>
              {expandedSections[section.id] ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="mt-3 space-y-3" data-testid={`filter-${section.id}-options`}>
                <p className="text-sm text-secondary">All</p>
                <button className="text-sm text-secondary underline">Unselect all</button>
                {section.options.map((option, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      className="custom-checkbox"
                      data-testid={`filter-option-${section.id}-${idx}`}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

// Product card component
function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Generate SEO-friendly image alt text
  const imageAlt = `${product.title} - ${product.category} product image`
  
  // Generate SEO-friendly image name from title
  const imageName = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50)

  return (
    <article 
      className="product-card group relative transition-all duration-300"
      data-testid={`product-card-${product.id}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Product image */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          itemProp="image"
          data-testid={`product-image-${product.id}`}
        />
        
        {/* Wishlist button */}
        <button
          className="heart-btn absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          data-testid={`wishlist-btn-${product.id}`}
        >
          <Heart 
            size={18} 
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1">
        <h3 
          className="text-sm font-medium line-clamp-1 uppercase tracking-wide"
          itemProp="name"
          data-testid={`product-title-${product.id}`}
        >
          {product.title}
        </h3>
        
        <p 
          className="text-xs text-secondary line-clamp-2"
          itemProp="description"
          data-testid={`product-description-${product.id}`}
        >
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <p 
            className="text-sm font-medium"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <span itemProp="priceCurrency" content="USD">$</span>
            <span itemProp="price" content={product.price}>{product.price.toFixed(2)}</span>
          </p>
          
          {/* Rating display */}
          {product.rating && (
            <div 
              className="flex items-center gap-1 text-xs text-secondary"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <span className="text-yellow-500">★</span>
              <span itemProp="ratingValue">{product.rating.rate}</span>
              <span>(<span itemProp="reviewCount">{product.rating.count}</span>)</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

// Main product listing component
export default function ProductListing({ products, categories }) {
  const [showFilters, setShowFilters] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('recommended')
  const [filters, setFilters] = useState({
    customizable: false,
    categories: [],
  })

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return (b.rating?.rate || 0) - (a.rating?.rate || 0)
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <section className="w-full bg-white" data-testid="product-listing">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Controls bar */}
        <div className="flex items-center justify-between py-4 border-b border-border">
          {/* Left - Items count and filter toggle */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary" data-testid="items-count">
              {products.length} ITEMS
            </span>
            
            {/* Desktop filter toggle */}
            <button
              className="hidden lg:flex items-center gap-2 text-sm underline"
              onClick={() => setShowFilters(!showFilters)}
              data-testid="toggle-filters-desktop"
            >
              {showFilters ? (
                <>
                  <ChevronLeft size={14} />
                  <span>HIDE FILTER</span>
                </>
              ) : (
                <>
                  <ChevronRight size={14} />
                  <span>SHOW FILTER</span>
                </>
              )}
            </button>

            {/* Mobile filter button */}
            <button
              className="lg:hidden flex items-center gap-2 text-sm underline"
              onClick={() => setMobileFiltersOpen(true)}
              data-testid="toggle-filters-mobile"
            >
              <span>FILTER</span>
            </button>
          </div>

          {/* Right - Sort dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-sm hidden sm:inline">RECOMMENDED</label>
            <div className="relative">
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-border rounded px-3 py-2 pr-8 text-sm cursor-pointer focus:outline-none focus:border-primary"
                data-testid="sort-select"
              >
                <option value="recommended">RECOMMENDED</option>
                <option value="newest">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex gap-8 py-6">
          {/* Desktop Filter sidebar */}
          {showFilters && (
            <div className="hidden lg:block">
              <FilterSidebar 
                categories={categories}
                filters={filters}
                setFilters={setFilters}
                isOpen={showFilters}
                setIsOpen={setShowFilters}
              />
            </div>
          )}

          {/* Mobile Filter overlay */}
          {mobileFiltersOpen && (
            <div 
              className="lg:hidden fixed inset-0 z-50 bg-black/50"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <div 
                className="bg-white w-80 h-full overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <FilterSidebar 
                  categories={categories}
                  filters={filters}
                  setFilters={setFilters}
                  isOpen={mobileFiltersOpen}
                  setIsOpen={setMobileFiltersOpen}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* H2 for SEO */}
            <h2 className="sr-only">Product Collection</h2>
            
            <div 
              className={`
                grid gap-4 lg:gap-6
                grid-cols-2 
                md:grid-cols-3 
                ${showFilters ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-5'}
              `}
              data-testid="product-grid"
            >
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty state */}
            {products.length === 0 && (
              <div className="text-center py-16" data-testid="empty-state">
                <p className="text-secondary">No products found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
