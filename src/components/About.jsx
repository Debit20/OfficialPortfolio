import { useScrollReveal } from '../hooks/useScrollReveal'
import { personal, methodologies } from '../data/portfolio'
import photo2 from '../assets/photo2.png'

export default function About() {
  const [titleRef, titleIn] = useScrollReveal()
  const [leftRef, leftIn] = useScrollReveal(0.1)
  const [rightRef, rightIn] = useScrollReveal(0.1)

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background orb */}
      <div
        className="orb orb-cyan absolute"
        style={{ width: 400, height: 400, top: '30%', left: '-10%', opacity: 0.06 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-4">01 — WHO I AM</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Me
            </span>
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: 60,
              height: 3,
              background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              borderRadius: 2,
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo collage */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-1000 ${leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">
              {/* Main photo */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid rgba(0,212,255,0.15)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.08)',
                }}
              >
                <img
                  src={photo2}
                  alt="Debjit Paul professional"
                  className="w-full object-cover"
                  style={{ height: 460, objectPosition: 'center top', filter: 'brightness(0.9)' }}
                />
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(5,5,8,0.7) 100%)',
                  }}
                />
              </div>

              {/* Floating code snippet card */}
              <div
                className="absolute -right-6 top-10 rounded-2xl glass card-gradient-border p-4 text-left"
                style={{ minWidth: 180 }}
              >
                <div
                  className="text-xs text-white/40 mb-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {'// Current stack'}
                </div>
                {['React.js', 'ASP.NET Core', 'MongoDB'].map((t, i) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-xs mb-1"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: ['#00d4ff', '#a855f7', '#00ff88'][i] }}
                    />
                    <span className="text-white/70">{t}</span>
                  </div>
                ))}
              </div>

              {/* CGPA badge */}
              <div
                className="absolute -left-4 bottom-10 rounded-2xl glass card-gradient-border px-5 py-4 text-center"
              >
                <div
                  className="text-3xl font-bold mb-0.5"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  8.79
                </div>
                <div className="text-xs text-white/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>CGPA</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-200 ${rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h3
              className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Building{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                scalable solutions
              </span>{' '}
              for real-world problems
            </h3>

            <p
              className="text-white/50 leading-relaxed text-base mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {personal.summary}
            </p>

            <p
              className="text-white/50 leading-relaxed text-base mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              I graduated with a B.Tech in Computer Science from FIEM with a CGPA of 8.79, 
              and currently work at <span className="text-white/80">Capsitech</span> where I build 
              enterprise-grade CRM systems serving over a million users across the UK accounting sector.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Location', value: '📍 Jodhpur, India' },
                { label: 'Status', value: '✅ Available' },
                { label: 'Degree', value: '🎓 B.Tech CSE' },
                { label: 'Experience', value: '💼 1+ Years' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 glass"
                >
                  <div className="text-xs text-white/30 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{label}</div>
                  <div className="text-sm text-white/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Methodologies */}
            <div>
              <div className="section-label mb-3">Methodologies</div>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-full text-xs transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: '#00d4ff',
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
