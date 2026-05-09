import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { personal } from '../data/portfolio'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: '#00d4ff',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: '#a855f7',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/debjitpaul',
    href: personal.linkedin,
    color: '#00ff88',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: personal.location,
    href: null,
    color: '#ff6b35',
  },
]

export default function Contact() {
  const [titleRef, titleIn] = useScrollReveal()
  const [formRef, formIn] = useScrollReveal(0.1)
  const [infoRef, infoIn] = useScrollReveal(0.1)

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending (replace with real EmailJS or API call)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '14px 16px',
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Orbs */}
      <div className="orb orb-cyan absolute" style={{ width: 500, height: 500, top: 0, right: '-10%', opacity: 0.05 }} />
      <div className="orb orb-purple absolute" style={{ width: 300, height: 300, bottom: '10%', left: '5%', opacity: 0.06 }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-4">05 — LET'S TALK</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Get In{' '}
            <span style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Touch
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            I'm always open to discussing new opportunities, interesting projects, or just a friendly chat about tech.
          </p>
          <div className="mx-auto mt-4" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', borderRadius: 2 }} />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`lg:col-span-2 space-y-4 transition-all duration-700 ${infoIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Intro card */}
            <div className="rounded-2xl p-6 glass card-gradient-border mb-6">
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                Ready to build something great?
              </h3>
              <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Whether you have a project in mind, a job opportunity, or just want to connect — my inbox is always open.
              </p>

              {/* Availability indicator */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/5">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <span className="text-sm text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Currently available for new opportunities
                </span>
              </div>
            </div>

            {/* Contact cards */}
            {contactInfo.map(({ icon, label, value, href, color }, i) => (
              <a
                key={label}
                href={href || undefined}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 rounded-xl p-4 glass transition-all duration-300 hover:-translate-y-0.5 ${href ? 'cursor-pointer' : 'cursor-default'}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  transitionDelay: `${i * 80}ms`,
                  opacity: infoIn ? 1 : 0,
                  transform: infoIn ? 'none' : 'translateX(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${color}40`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}15`, color }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-white/30 mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{label}</div>
                  <div className="text-sm text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${formIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="rounded-2xl p-8 glass card-gradient-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project opportunity / Collaboration..."
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    background: status === 'sent'
                      ? 'linear-gradient(135deg, #00ff88, #00d4ff)'
                      : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                    color: '#fff',
                    boxShadow: '0 0 40px rgba(0,212,255,0.25)',
                  }}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : status === 'sent' ? (
                    '✓ Message Sent Successfully!'
                  ) : (
                    'Send Message →'
                  )}
                </button>

                <p className="text-center text-xs text-white/25" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  I typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
