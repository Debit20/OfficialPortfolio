import { useEffect, useState, useRef } from 'react'
import { personal, stats } from '../data/portfolio'
import photo1 from '../assets/photo1.png'

const TAGLINES = personal.taglines

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const current = TAGLINES[taglineIdx]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setTaglineIdx((i) => (i + 1) % TAGLINES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, taglineIdx])

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg "
    >
      {/* Background Orbs */}
      <div
        className="orb orb-cyan"
        style={{
          width: 600,
          height: 600,
          top: '-10%',
          left: '-10%',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.8s ease',
        }}
      />
      <div
        className="orb orb-purple"
        style={{
          width: 500,
          height: 500,
          bottom: '-5%',
          right: '-5%',
          transform: `translate(${-mousePos.x * 15}px, ${-mousePos.y * 15}px)`,
          transition: 'transform 0.8s ease',
        }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute opacity-5 animate-float"
        style={{
          top: '20%', right: '15%',
          width: 120, height: 120,
          border: '1px solid #00d4ff',
          borderRadius: 24,
          animationDelay: '0s',
          transform: `rotate(${15 + mousePos.x * 5}deg)`,
          transition: 'transform 0.5s ease',
        }}
      />
      <div
        className="absolute opacity-5 animate-float"
        style={{
          bottom: '25%', left: '10%',
          width: 80, height: 80,
          border: '1px solid #7c3aed',
          borderRadius: '50%',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute opacity-5 animate-float"
        style={{
          top: '60%', right: '8%',
          width: 40, height: 40,
          background: 'rgba(0,255,136,0.5)',
          borderRadius: 8,
          animationDelay: '4s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              color: '#00d4ff',
              letterSpacing: '0.15em',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#00ff88' }}
            />
            AVAILABLE FOR HIRE
          </div>

          <h1
            className="text-5xl lg:text-7xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 60%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Debjit Paul
            </span>
          </h1>

          {/* Typewriter */}
          <div
            className="text-xl lg:text-2xl mb-6 h-8 flex items-center gap-1"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.5)' }}
          >
            <span className="text-white/30">{'<'}</span>
            <span style={{ color: '#00d4ff' }}>{displayed}</span>
            <span
              className="inline-block w-0.5 h-6 animate-pulse"
              style={{ background: '#00d4ff' }}
            />
            <span className="text-white/30">{'/>'}</span>
          </div>

          <p
            className="text-white/50 text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Building scalable full-stack applications with{' '}
            <span style={{ color: '#00d4ff' }}>React</span>,{' '}
            <span style={{ color: '#a855f7' }}>ASP.NET Core</span>, and{' '}
            <span style={{ color: '#00ff88' }}>MongoDB</span>. Turning complex problems
            into elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                color: '#fff',
                boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
              }}
            >
              Get In Touch
            </button>
            <button
              onClick={scrollToWork}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 group"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                background: 'transparent',
              }}
            >
              View My Work
              <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-8">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Decorative ring */}
          <div
            className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full animate-spin-slow"
            style={{
              border: '1px solid rgba(0,212,255,0.1)',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '30s',
            }}
          />
          <div
            className="absolute w-72 h-72 lg:w-88 lg:h-88 rounded-full"
            style={{
              border: '1px dashed rgba(124,58,237,0.2)',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Photo container */}
          <div
            className="relative w-64 h-64 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden animate-float"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
              boxShadow: '0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(124,58,237,0.1)',
              border: '1px solid rgba(0,212,255,0.3)',
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: 'transform 0.5s ease',
            }}
          >
            <img
              src={photo1}
              alt="Debjit Paul"
              className="w-full h-full object-cover object-top scale-97 "
              style={{ filter: 'brightness(0.9) contrast(1.05)', objectPosition: 'center 40%',}}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(5,5,8,0.4) 0%, transparent 50%)',
              }}
            />
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div
        className="absolute bottom-0 left-0 right-0 glass border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, suffix }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-bold mb-0.5"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}{suffix}
              </div>
              <div
                className="text-xs text-white/40"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="text-xs text-white/40" style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>SCROLL</div>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)' }}
        />
      </div>
    </section>
  )
}
