import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    mettaMuse: [
      { label: 'About Us', href: '#' },
      { label: 'Stories', href: '#' },
      { label: 'Artisans', href: '#' },
      { label: 'Boutiques', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'EU Compliances Docs', href: '#' },
    ],
    quickLinks: [
      { label: 'Orders & Shipping', href: '#' },
      { label: 'Join/Login as a Seller', href: '#' },
      { label: 'Payment & Pricing', href: '#' },
      { label: 'Return & Refunds', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  }

  const paymentMethods = ['gpay', 'mastercard', 'paypal', 'amex', 'applepay', 'opay']

  return (
    <footer className="w-full bg-black text-white mt-auto" data-testid="footer">
      {/* Newsletter section */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Newsletter signup */}
            <div>
              <h3 className="text-lg uppercase tracking-wider mb-4">BE THE FIRST TO KNOW</h3>
              <p className="text-gray-400 text-sm mb-4">
                Sign up for updates from mettā muse.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className="bg-transparent border border-gray-600 px-4 py-2 flex-1 text-sm focus:outline-none focus:border-white"
                  data-testid="newsletter-input"
                />
                <button 
                  className="bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
                  data-testid="newsletter-submit"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact info */}
            <div className="md:text-right">
              <h3 className="text-lg uppercase tracking-wider mb-4">CONTACT US</h3>
              <p className="text-gray-400 text-sm mb-2">+44 221 133 5360</p>
              <p className="text-gray-400 text-sm mb-4">customercare@mettamuse.com</p>
              
              {/* Currency selector */}
              <h3 className="text-lg uppercase tracking-wider mb-4 mt-6">CURRENCY</h3>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <span className="inline-block w-6 h-4 bg-white rounded-sm"></span>
                <span className="text-sm">USD</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* metta muse links */}
            <div>
              <h3 className="text-lg uppercase tracking-wider mb-6">mettā muse</h3>
              <ul className="space-y-3">
                {footerLinks.mettaMuse.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg uppercase tracking-wider mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us & Payment */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg uppercase tracking-wider mb-6">FOLLOW US</h3>
              <div className="flex gap-4 mb-8">
                <a 
                  href="#" 
                  className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-colors"
                  aria-label="Instagram"
                  data-testid="social-instagram"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-colors"
                  aria-label="LinkedIn"
                  data-testid="social-linkedin"
                >
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Payment methods */}
              <h3 className="text-lg uppercase tracking-wider mb-4">mettā muse ACCEPTS</h3>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, idx) => (
                  <div 
                    key={idx}
                    className="w-10 h-6 bg-white rounded flex items-center justify-center"
                    data-testid={`payment-${method}`}
                  >
                    <span className="text-black text-[8px] font-bold uppercase">{method.slice(0, 4)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4">
        <p className="text-gray-500 text-sm text-center">
          Copyright © 2023 mettā muse. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
