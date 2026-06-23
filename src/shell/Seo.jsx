import { useEffect } from "react"

/* tiny document-head manager — sets title + meta description per route.
   no external dep; runs on mount + when props change. */
export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let el = document.querySelector('meta[name="description"]')
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("name", "description")
        document.head.appendChild(el)
      }
      el.setAttribute("content", description)
    }
  }, [title, description])
  return null
}
