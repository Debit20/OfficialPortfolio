import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import VideoLoader from './components/VideoLoader'
import { useEffect, useState } from 'react'
import EnterScreen from './components/EnterScreen'

export default function App() {
  const [stage, setStage] = useState('enter') 

  return (
    <>
      {/* Enter screen */}
      {stage === 'enter' && (
        <EnterScreen onEnter={() => setStage('loading')} />
      )}
      {/* Video loader */}
      {stage === 'loading' && (
        <VideoLoader onFinish={() => setStage('done')} />
      )}

      <div className="noise-overlay" style={{
        opacity: stage === 'done' ? 1 : 0,   
        transition: 'opacity 1.2s ease',
        pointerEvents: stage === 'done' ? 'auto' : 'none',
      }}>
        {/* Custom cursor (desktop only) */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
