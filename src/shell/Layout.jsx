import Header from "./Header.jsx"
import ShellFooter from "./ShellFooter.jsx"

/* shared chrome for every one-stop-shop page. the manifesto route opts out. */
export default function Layout({ children }) {
  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        skip to content
      </a>
      <Header />
      <main id="main" className="shell-main">
        {children}
      </main>
      <ShellFooter />
    </div>
  )
}
