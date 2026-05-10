export default function EnterScreen({ onEnter }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#0a0a0a',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>

      {/* ← ADD THIS — defines all animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0%   { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes btnpulse {
          0%, 100% { border-color: rgba(123,80,255,0.55); }
          50%       { border-color: rgba(123,80,255,1); }
        }
      `}</style>

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '44px 44px',
      }} />

      {/* Scanning line */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(123,80,255,0.25), transparent)',
        animation: 'scan 5s linear infinite',
      }} />

      {/* Corner brackets */}
      {[
        { top: 18, left: 18, borderWidth: '1px 0 0 1px' },
        { top: 18, right: 18, borderWidth: '1px 1px 0 0' },
        { bottom: 18, left: 18, borderWidth: '0 0 1px 1px' },
        { bottom: 18, right: 18, borderWidth: '0 1px 1px 0' },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', width: 18, height: 18,
          borderColor: 'rgba(123,80,255,0.45)',
          borderStyle: 'solid',
          ...s,
        }} />
      ))}

      {/* Year label */}
      <p style={{
        position: 'absolute', top: 18, right: 52,
        fontSize: 10, color: 'rgba(255,255,255,0.18)',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        margin: 0,
      }}>2025</p>

      {/* Status dot */}
      <p style={{
        fontSize: 11, color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        marginBottom: '2rem',
        animation: 'fadeUp 0.7s ease both',
        animationDelay: '0.1s',
      }}>
        <span style={{
          display: 'inline-block', width: 6, height: 6,
          borderRadius: '50%', background: '#7b50ff',
          marginRight: 8, verticalAlign: 'middle',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        portfolio — ready to load
      </p>

      {/* Name */}
      <p style={{
        fontSize: 12, color: 'rgba(255,255,255,0.22)',
        letterSpacing: '0.35em', textTransform: 'uppercase',
        marginBottom: '0.6rem',
        animation: 'fadeUp 0.7s ease both',
        animationDelay: '0.3s',
      }}>
        Debjit
      </p>

      {/* Tagline */}
      <h1 style={{
        fontSize: 28, fontWeight: 500, color: '#fff',
        textAlign: 'center', lineHeight: 1.4,
        marginBottom: '0.4rem', maxWidth: 480,
        animation: 'fadeUp 0.7s ease both',
        animationDelay: '0.5s',
      }}>
        I don't just write code.<br />
        I build things that{' '}
        <span style={{ color: '#7b50ff' }}>
          feel alive
          <span style={{
            display: 'inline-block', width: 2, height: 16,
            background: '#7b50ff', marginLeft: 1,
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </span>
      </h1>

      {/* Sub */}
      <p style={{
        fontSize: 13, color: 'rgba(255,255,255,0.28)',
        textAlign: 'center', marginBottom: '2.8rem',
        letterSpacing: '0.06em',
        animation: 'fadeUp 0.7s ease both',
        animationDelay: '0.7s',
      }}>
        Full-stack developer &nbsp;·&nbsp; UI craftsman &nbsp;·&nbsp; Problem solver
      </p>

      {/* Button */}
      <button
        onClick={onEnter}
        style={{
          background: 'transparent',
          border: '1px solid rgba(123,80,255,0.55)',
          color: '#fff',
          padding: '0.8rem 2.6rem',
          fontSize: 12,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          borderRadius: 2,
          animation: 'fadeUp 0.7s ease both, btnpulse 2.5s ease-in-out 1.5s infinite',
          animationDelay: '0.9s',
        }}
      >
        Enter the experience
      </button>

      {/* Hint */}
      <p style={{
        marginTop: '1.4rem', fontSize: 11,
        color: 'rgba(255,255,255,0.14)',
        letterSpacing: '0.1em',
        animation: 'fadeUp 0.7s ease both',
        animationDelay: '1.1s',
      }}>
        ↑ &nbsp;turn sound on for the full experience
      </p>

    </div>
  )
}