import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience, education } from '../data/portfolio'

function TimelineItem({ item, index }) {
  const [ref, inView] = useScrollReveal(0.1)
  const isExp = 'company' in item
  const accentColor = item.color || '#00d4ff'

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-12 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.3), transparent)' }}
      />
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3px] ring-4"
        style={{
          background: accentColor,
          boxShadow: `0 0 12px ${accentColor}`,
          ringColor: 'rgba(0,0,0,0.5)',
        }}
      />

      <div
        className="rounded-2xl p-6 glass card-gradient-border transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'rgba(15,15,22,0.8)',
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {isExp ? item.role : item.degree}
            </h3>
            <div
              className="text-base font-medium"
              style={{ color: accentColor, fontFamily: 'DM Sans, sans-serif' }}
            >
              {isExp ? item.company : item.institution}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                background: `${accentColor}15`,
                border: `1px solid ${accentColor}30`,
                color: accentColor,
              }}
            >
              {item.period}
            </span>
            {item.location && (
              <span className="text-xs text-white/30" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                📍 {item.location}
              </span>
            )}
            {item.cgpa && (
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  background: 'rgba(0,255,136,0.1)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  color: '#00ff88',
                }}
              >
                CGPA: {item.cgpa}
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        {item.highlights && (
          <ul className="space-y-2 mb-4">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: accentColor }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Courses */}
        {item.courses && (
          <div className="mb-4">
            <div className="section-label mb-2">Coursework</div>
            <div className="flex flex-wrap gap-2">
              {item.courses.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-lg text-xs text-white/60"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech tags */}
        {item.tech && (
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  background: `${accentColor}10`,
                  border: `1px solid ${accentColor}25`,
                  color: accentColor,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const [titleRef, titleIn] = useScrollReveal()

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background orb */}
      <div
        className="orb orb-purple absolute"
        style={{ width: 400, height: 400, top: '20%', right: '-10%', opacity: 0.06 }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-4">02 — MY JOURNEY</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Work{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience
            </span>{' '}
            &amp; Education
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

        {/* Experience Column */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white/40 mb-8 flex items-center gap-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.2)',
                color: '#00d4ff',
              }}
            >
              WORK
            </span>
            Professional Experience
          </h3>
          {experience.map((exp, i) => (
            <TimelineItem key={exp.company} item={exp} index={i} />
          ))}
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-lg font-semibold text-white/40 mb-8 flex items-center gap-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                background: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.2)',
                color: '#a855f7',
              }}
            >
              EDU
            </span>
            Education
          </h3>
          {education.map((edu, i) => (
            <TimelineItem key={edu.institution} item={{ ...edu, color: '#a855f7' }} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
