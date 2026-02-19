import { ChevronDown } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="w-full bg-white py-8 lg:py-12" data-testid="hero-banner">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
        {/* Main heading - H1 for SEO */}
        <h1 
          className="text-3xl lg:text-5xl tracking-[0.1em] uppercase mb-4"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          data-testid="hero-title"
        >
          DISCOVER OUR PRODUCTS
        </h1>
        
        {/* Subheading */}
        <p 
          className="text-secondary text-sm lg:text-base max-w-2xl mx-auto leading-relaxed"
          data-testid="hero-description"
        >
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      {/* Separator line */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-8">
        <div className="border-t border-border"></div>
      </div>
    </section>
  )
}
