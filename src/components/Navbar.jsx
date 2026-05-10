import { useState, useEffect } from 'react'
import plogo from '../assets/plogo.gif'
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass border-b border-white/5 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="relative group"
          >
            <span
              className="font-display text-2xl font-bold"
              style={{
                fontFamily: 'Syne, sans-serif',
                background: 'linear-gradient(135deg, #fff 0%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
             <img className ="w-14 rounded-full" src={plogo}/> 
            </span>
            <span
              className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
            />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                    className={`relative text-sm font-medium transition-colors duration-300 group ${
                      isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                    }`}
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <a
            href="mailto:paul.debjit.2022@gmail.com"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
              border: '1px solid rgba(0,212,255,0.3)',
              color: '#00d4ff',
            }}
          >
            <span>Hire Me</span>
            <span>→</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-white/60 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-white/60 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-white/60 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className="text-white/60 hover:text-white transition-colors py-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
