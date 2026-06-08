import { useRef, useEffect } from 'react'
const logoreveal = 'https://res.cloudinary.com/dieyjf139/video/upload/v1779008046/portfolioAnimation_eoxi6y.mp4';
export default function VideoLoader({ onFinish }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {
      onFinish()
    })

    video.addEventListener('ended', onFinish)
    return () => video.removeEventListener('ended', onFinish)
  }, [onFinish])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
    }}>
      <video
        ref={videoRef}
        src={logoreveal}
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',  
        }}
      />
    </div>
  )
}