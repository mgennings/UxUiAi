/* table of contents for legal pages. takes [{id, label}] and renders
   an anchored, sticky nav. */
export default function TableOfContents({ items, label = "on this page" }) {
  return (
    <nav className="doc-toc" aria-label="table of contents">
      <h4>{label}</h4>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
