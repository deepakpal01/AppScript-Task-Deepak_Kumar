import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import ProductListing from '@/components/ProductListing'
import Footer from '@/components/Footer'

// Server-side data fetching for SSR
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

async function getCategories() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', {
      next: { revalidate: 3600 }
    })
    if (!res.ok) throw new Error('Failed to fetch categories')
    return res.json()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Schema.org structured data for SEO
function generateSchema(products) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Product Listing',
    description: 'Browse our collection of premium fashion products',
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.image,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating?.rate || 4.5,
          reviewCount: product.rating?.count || 100,
        },
      },
    })),
  }
}

export default async function Home() {
  // Fetch data server-side for SSR
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  const schemaData = generateSchema(products)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen flex flex-col">
        <Header />
        <HeroBanner />
        <ProductListing products={products} categories={categories} />
        <Footer />
      </main>
    </>
  )
}
