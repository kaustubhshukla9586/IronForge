import { Globe, ExternalLink, Play } from 'lucide-react'

const footerLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book a Session', href: '#booking' },
]

const socials = [
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: ExternalLink, href: '#', label: 'Twitter' },
  { icon: Play, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #2A2A2A' }}>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '48px 24px',
        }}
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

        <div className="flex items-center gap-8">
          {footerLinks.map((link) => (
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

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-colors duration-200"
              style={{ color: '#888' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF4D00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #2A2A2A',
          padding: '20px 24px',
          textAlign: 'center',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: '#888',
        }}
      >
        &copy; 2025 IronForge Fitness. All rights reserved.
      </div>
    </footer>
  )
}
