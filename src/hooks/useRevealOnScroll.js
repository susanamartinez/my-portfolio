import { useEffect, useRef, useState } from 'react'

export default function useRevealOnScroll(options = {}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const node = elementRef.current
    if (!node || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, options.rootMargin, options.threshold])

  return { elementRef, isVisible }
}
