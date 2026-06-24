import { Router, Routes, Route, ScrollToTop } from "./router/router.jsx"
import { ThemeProvider } from "./shell/theme.jsx"

import Apps from "./pages/apps/Apps.jsx"
import AppsIndex from "./pages/apps/AppsIndex.jsx"
import AppPage, { APPS } from "./pages/apps/AppPage.jsx"
import Manifesto from "./pages/Manifesto.jsx"
import Contact from "./pages/Contact.jsx"
import ExternalRedirect from "./pages/ExternalRedirect.jsx"
import AirbridgeRedirect from "./pages/apps/airbridge/AirbridgeRedirect.jsx"
import OrgPrivacy from "./pages/legal/OrgPrivacy.jsx"
import OrgTerms from "./pages/legal/OrgTerms.jsx"
import NotFound from "./pages/NotFound.jsx"

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* home = the apps showcase; each app gets its own page */}
          <Route path="/" element={<Apps />} />
          <Route path="/apps" element={<AppsIndex />} />
          <Route
            path="/apps/airbridge"
            element={<AppPage app={APPS.airbridge} />}
          />
          <Route
            path="/apps/undertext"
            element={<AppPage app={APPS.undertext} />}
          />

          {/* work lives at the portfolio, not here */}
          <Route
            path="/work"
            element={
              <ExternalRedirect
                to="https://mgennings.com"
                label="the portfolio at mgennings.com"
              />
            }
          />

          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/contact" element={<Contact />} />

          {/* AirBridge's legal/support pages live on its own domain */}
          <Route
            path="/apps/airbridge/privacy"
            element={<AirbridgeRedirect to="/privacy" />}
          />
          <Route
            path="/apps/airbridge/terms"
            element={<AirbridgeRedirect to="/terms" />}
          />
          <Route
            path="/apps/airbridge/support"
            element={<AirbridgeRedirect to="/support" />}
          />

          <Route path="/legal/privacy" element={<OrgPrivacy />} />
          <Route path="/legal/terms" element={<OrgTerms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
