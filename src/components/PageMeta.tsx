import { useEffect } from 'react'

type Props = {
  title: string
  description: string
  /** Keep the page out of search results (the 404 page). */
  noindex?: boolean
}

// Sets the tab title and meta description as the visitor moves between pages.
// Search engines and link previews read the same values from the HTML that
// the build writes for each page (server/seo-files.ts).
export default function PageMeta({ title, description, noindex = false }: Props) {
  useEffect(() => {
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [description])

  return (
    <>
      <title>{title}</title>
      {noindex && <meta name="robots" content="noindex" />}
    </>
  )
}
