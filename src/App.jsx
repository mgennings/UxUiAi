import { Router, Routes, Route, ScrollToTop } from "./router/router.jsx"

import Home from "./pages/Home.jsx"
import Manifesto from "./pages/Manifesto.jsx"
import Work from "./pages/Work.jsx"
import Contact from "./pages/Contact.jsx"
import Apps from "./pages/apps/Apps.jsx"
import Airbridge from "./pages/apps/airbridge/Airbridge.jsx"
import AirbridgePrivacy from "./pages/apps/airbridge/Privacy.jsx"
import AirbridgeTerms from "./pages/apps/airbridge/Terms.jsx"
import AirbridgeSupport from "./pages/apps/airbridge/Support.jsx"
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
        <Route path="/apps/airbridge" element={<Airbridge />} />
        <Route path="/apps/airbridge/privacy" element={<AirbridgePrivacy />} />
        <Route path="/apps/airbridge/terms" element={<AirbridgeTerms />} />
        <Route path="/apps/airbridge/support" element={<AirbridgeSupport />} />
        <Route path="/legal/privacy" element={<OrgPrivacy />} />
        <Route path="/legal/terms" element={<OrgTerms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
