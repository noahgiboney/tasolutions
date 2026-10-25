type Props = {
  src: string
  alt: string
  /** Figure number, e.g. 3 renders "FIG. 03". */
  n?: number
  caption: string
  meta?: string
  /** "contain" for CAD renders and transparent PNGs; "cover" for photos. */
  fit?: 'cover' | 'contain'
  /** Image aspect ratio inside the plate. */
  ratio?: string
  onDark?: boolean
  eager?: boolean
  className?: string
}

// The standard way to show an image (DESIGN.md §6, "Figure plate").
export default function Figure({
  src,
  alt,
  n,
  caption,
  meta,
  fit = 'cover',
  ratio = '4 / 3',
  onDark = false,
  eager = false,
  className = '',
}: Props) {
  return (
    <figure className={`plate${onDark ? ' plate-dark' : ''} ${className}`}>
      <div className={`plate-media fit-${fit}`} style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} draggable={false} />
      </div>
      <figcaption className="plate-caption">
        <span>
          {n !== undefined && `FIG. ${String(n).padStart(2, '0')} — `}
          {caption}
        </span>
        {meta && <span className="plate-meta">{meta}</span>}
      </figcaption>
    </figure>
  )
}
