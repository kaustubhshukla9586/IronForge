import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book a Session', href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        height: 64,
        backgroundColor: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: 1200, padding: '0 24px' }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            textDecoration: 'none',
          }}
        >
          <span style={{ color: '#fff' }}>IRON</span>
          <span style={{ color: '#FF4D00' }}>FORGE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:!text-white"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: '#888',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#booking"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
          className="hidden md:inline-flex items-center justify-center"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            height: 48,
            padding: '0 32px',
            borderRadius: 100,
            backgroundColor: '#FF4D00',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Book Now
        </motion.a>

        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className="block w-6 h-0.5 transition-transform duration-200"
              style={{
                backgroundColor: '#fff',
                transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="block h-0.5 transition-all duration-200"
              style={{
                backgroundColor: '#fff',
                width: mobileOpen ? 24 : 16,
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-transform duration-200"
              style={{
                backgroundColor: '#fff',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-4"
          style={{
            backgroundColor: 'rgba(13,13,13,0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #2A2A2A',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#888',
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center mt-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              height: 48,
              borderRadius: 100,
              backgroundColor: '#FF4D00',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
