import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from './Icons.tsx'

type Props = {
  label: string
  children: ReactNode
}

// Horizontal scroll-snap track with prev/next buttons. Swipe and trackpad
// scrolling work natively; the buttons move by one card.
export default function Carousel({ label, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <div className="carousel" role="region" aria-label={label}>
      <div className="carousel-controls">
        <button
          className="icon-btn"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Previous"
        >
          <ArrowLeft />
        </button>
        <button
          className="icon-btn"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>
      <ul className="carousel-track" ref={trackRef}>
        {children}
      </ul>
    </div>
  )
}
