import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal – returns a ref and a boolean `inView`.
 * Attach the ref to any element; `inView` becomes true once
 * the element enters the viewport (and stays true).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // once is enough
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
