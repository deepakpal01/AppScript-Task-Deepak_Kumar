'use client'

import { useState } from 'react'
import { Menu, Search, Heart, ShoppingBag, User, ChevronDown, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <header className="w-full bg-white" data-testid="header">
      {/* Top bar - black announcement bar */}
      <div className="bg-black text-white py-2 px-4" data-testid="announcement-bar">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Lorem ipsum dolor</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          {/* Desktop and Mobile header */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left - Menu and Logo (mobile) / Logo (desktop) */}
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2 -ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                data-testid="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {/* Logo */}
              <a href="/" className="flex items-center" data-testid="logo">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:hidden">
                  <rect width="36" height="36" fill="#252020"/>
                  <path d="M10 10h16v16H10z" fill="white"/>
                </svg>
              </a>
            </div>

            {/* Center - Logo (desktop) */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <a href="/" className="text-2xl tracking-[0.2em] font-medium uppercase" style={{ fontFamily: "'Work Sans', sans-serif" }} data-testid="logo-desktop">
                LOGO
              </a>
            </div>

            {/* Mobile center logo */}
            <div className="lg:hidden flex-1 flex justify-center">
              <a href="/" className="text-xl tracking-[0.2em] font-medium uppercase" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                LOGO
              </a>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center gap-2 lg:gap-4">
              <button className="p-2" aria-label="Search" data-testid="search-btn">
                <Search size={20} />
              </button>
              <button className="p-2 hidden lg:block" aria-label="Wishlist" data-testid="wishlist-btn">
                <Heart size={20} />
              </button>
              <button className="p-2" aria-label="Cart" data-testid="cart-btn">
                <ShoppingBag size={20} />
              </button>
              <button className="p-2 hidden lg:block" aria-label="Account" data-testid="account-btn">
                <User size={20} />
              </button>
              
              {/* Language selector */}
              <div className="relative hidden lg:block">
                <button 
                  className="flex items-center gap-1 p-2 text-sm"
                  onClick={() => setLanguageOpen(!languageOpen)}
                  data-testid="language-selector"
                >
                  <span>ENG</span>
                  <ChevronDown size={14} className={`transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
                </button>
                {languageOpen && (
                  <div className="absolute right-0 top-full bg-white border border-border shadow-lg py-2 min-w-[100px] z-50">
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">English</button>
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">French</button>
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">German</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 py-4 border-t border-border" data-testid="desktop-nav">
            <a href="#" className="nav-link text-sm uppercase tracking-wider">Shop</a>
            <a href="#" className="nav-link text-sm uppercase tracking-wider">Skills</a>
            <a href="#" className="nav-link text-sm uppercase tracking-wider">Stories</a>
            <a href="#" className="nav-link text-sm uppercase tracking-wider">About</a>
            <a href="#" className="nav-link text-sm uppercase tracking-wider">Contact Us</a>
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <nav 
            className="bg-white w-72 h-full p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
            data-testid="mobile-nav"
          >
            <a href="#" className="text-base py-2 uppercase tracking-wider border-b border-border">Shop</a>
            <a href="#" className="text-base py-2 uppercase tracking-wider border-b border-border">Skills</a>
            <a href="#" className="text-base py-2 uppercase tracking-wider border-b border-border">Stories</a>
            <a href="#" className="text-base py-2 uppercase tracking-wider border-b border-border">About</a>
            <a href="#" className="text-base py-2 uppercase tracking-wider border-b border-border">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  )
}
