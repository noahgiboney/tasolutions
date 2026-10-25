import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: string
  image: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, image, children }: Props) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="container page-hero-inner">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  )
}
