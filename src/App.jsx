import { Router, Routes, Route, ScrollToTop } from "./router/router.jsx"

import Home from "./pages/Home.jsx"
import Manifesto from "./pages/Manifesto.jsx"
import Work from "./pages/Work.jsx"
import Contact from "./pages/Contact.jsx"
import Apps from "./pages/apps/Apps.jsx"
import AirbridgeRedirect from "./pages/apps/airbridge/AirbridgeRedirect.jsx"
import OrgPrivacy from "./pages/legal/OrgPrivacy.jsx"
import OrgTerms from "./pages/legal/OrgTerms.jsx"
import NotFound from "./pages/NotFound.jsx"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/airbridge" element={<AirbridgeRedirect to="/" />} />
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
  )
}
