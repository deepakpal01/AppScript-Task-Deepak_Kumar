import './globals.css'

export const metadata = {
  title: 'Discover Our Products | Premium Fashion & Lifestyle Collection',
  description: 'Explore our curated collection of premium fashion products. Shop the latest trends in clothing, electronics, jewelry, and more. Free shipping on orders over $50.',
  keywords: 'fashion, clothing, electronics, jewelry, online shopping, premium products, lifestyle',
  authors: [{ name: 'Appscrip' }],
  openGraph: {
    title: 'Discover Our Products | Premium Fashion & Lifestyle Collection',
    description: 'Explore our curated collection of premium fashion products.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Appscrip Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Our Products',
    description: 'Explore our curated collection of premium fashion products.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Work+Sans:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#252020" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Work Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
