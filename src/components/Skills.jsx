import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolio'

function SkillBar({ name, level, delay = 0, color = '#00d4ff' }) {
  const [ref, inView] = useScrollReveal(0.3)

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>{name}</span>
        <span
          className="text-xs font-mono transition-all duration-700"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color,
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay + 800}ms`,
          }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            width: `${level}%`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, items, color, icon, delay }) {
  const [ref, inView] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`rounded-2xl p-6 glass card-gradient-border transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          {icon}
        </div>
        <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
          {category}
        </h3>
      </div>

      {items.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={i * 100}
          color={color}
        />
      ))}
    </div>
  )
}

const skillCategories = [
  {
    category: 'Languages',
    items: skills.languages,
    color: '#00d4ff',
    icon: '⌨️',
  },
  {
    category: 'Frameworks & Libraries',
    items: skills.frameworks,
    color: '#a855f7',
    icon: '⚛️',
  },
  {
    category: 'Databases & Tools',
    items: skills.tools,
    color: '#00ff88',
    icon: '🛢️',
  },
]

export default function Skills() {
  const [titleRef, titleIn] = useScrollReveal()

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="orb orb-cyan absolute"
        style={{ width: 500, height: 500, bottom: '0%', left: '-15%', opacity: 0.05 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-label mb-4">03 — EXPERTISE</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Technical{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Skills
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

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map(({ category, items, color, icon }, i) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              color={color}
              icon={icon}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Tech Bubble Cloud */}
        <TechBubbles />
      </div>
    </section>
  )
}

function TechBubbles() {
  const [ref, inView] = useScrollReveal(0.2)

  const allTech = [
    { name: 'React.js', color: '#61dafb' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'ASP.NET Core', color: '#512bd4' },
    { name: 'MongoDB', color: '#00ed64' },
    { name: 'Node.js', color: '#68a063' },
    { name: 'Azure', color: '#0078d4' },
    { name: 'Git', color: '#f05032' },
    { name: 'SQL Server', color: '#cc2927' },
    { name: 'Elasticsearch', color: '#f04e98' },
    { name: 'Postman', color: '#ff6c37' },
    { name: 'Swagger', color: '#85ea2d' },
    { name: 'Python', color: '#3572a5' },
  ]

  return (
    <div
      ref={ref}
      className={`glass rounded-3xl p-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="section-label mb-6 text-center">TECH ECOSYSTEM</div>
      <div className="flex flex-wrap justify-center gap-3">
        {allTech.map(({ name, color }, i) => (
          <span
            key={name}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              background: `${color}12`,
              border: `1px solid ${color}30`,
              color,
              transitionDelay: `${i * 40}ms`,
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
