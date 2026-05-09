import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const [ref, inView] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl p-6 glass glass-hover card-gradient-border transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px transition-all duration-500 group-hover:left-0 group-hover:right-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{
            background: `${project.color}15`,
            border: `1px solid ${project.color}30`,
          }}
        >
          {project.icon}
        </div>

        {/* Metric badge */}
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            background: `${project.color}15`,
            border: `1px solid ${project.color}30`,
            color: project.color,
          }}
        >
          {project.metrics}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-white/45 text-sm leading-relaxed mb-5"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg text-xs"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [titleRef, titleIn] = useScrollReveal()

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background orb */}
      <div
        className="orb orb-purple absolute"
        style={{ width: 400, height: 400, bottom: '-5%', left: '40%', opacity: 0.06 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-4">04 — WHAT I'VE BUILT</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Featured{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
