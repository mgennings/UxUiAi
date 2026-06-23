import DocPage from "../../../shell/DocPage.jsx"
import { Link } from "../../../router/router.jsx"

const toc = [
  { id: "acceptance", label: "acceptance" },
  { id: "license", label: "license grant" },
  { id: "subscriptions", label: "subscriptions and auto-renewal" },
  { id: "pricing", label: "pricing" },
  { id: "refunds", label: "refunds" },
  { id: "health", label: "health data disclaimer" },
  { id: "warranties", label: "disclaimer of warranties" },
  { id: "liability", label: "limitation of liability" },
  { id: "termination", label: "termination" },
  { id: "governing-law", label: "governing law" },
  { id: "contact", label: "contact" },
]

export default function AirbridgeTerms() {
  return (
    <DocPage
      kicker="airbridge health"
      title="terms of service"
      effective="June 23, 2026"
      updated="June 23, 2026"
      toc={toc}
      seoTitle="airbridge health — terms of service"
      seoDescription="terms of service for airbridge health: license, subscription auto-renewal, pricing, refunds, health-data disclaimer, warranty disclaimer, limitation of liability, and governing law."
    >
      <h2 id="acceptance">acceptance</h2>
      <p>
        these terms of service govern your use of airbridge health (the "app"),
        a product of Austin Web Company LLC (d/b/a experience Architects,
        renaming to uxuiai.org LLC), of 1115 W 10th St, Apt 108, Austin, TX
        78703 (the "company," "we," or "us"). by downloading, installing, or
        using the app, you agree to these terms. if you do not agree, do not use
        the app.
      </p>

      <h2 id="license">license grant</h2>
      <p>
        subject to these terms, we grant you a personal, non-exclusive,
        non-transferable, revocable license to use airbridge health on Apple
        devices that you own or control, for your own personal, non-commercial
        use. this license is granted to you and not to any other person.
      </p>
      <p>you agree not to:</p>
      <ul>
        <li>
          copy, modify, reverse-engineer, decompile, or disassemble the app,
          except to the extent that applicable law expressly permits it;
        </li>
        <li>
          rent, lease, lend, sell, redistribute, or sublicense the app; or
        </li>
        <li>
          use the app in any way that violates applicable law or the App Store
          terms.
        </li>
      </ul>

      <h2 id="subscriptions">subscriptions and auto-renewal</h2>
      <p>
        airbridge health offers an optional paid tier, airbridge Pro, available
        as an auto-renewable subscription or a one-time lifetime purchase, sold
        through Apple's in-app purchase system. for auto-renewable
        subscriptions, the following terms apply:
      </p>
      <p>
        Payment will be charged to Apple ID account at confirmation of purchase.
        Subscription automatically renews unless auto-renew is turned off at
        least 24-hours before the end of the current period. Account will be
        charged for renewal within 24-hours prior to the end of the current
        period. Subscriptions may be managed by the user and auto-renewal may be
        turned off by going to the user's Account Settings after purchase.
      </p>

      <h2 id="pricing">pricing</h2>
      <p>
        airbridge Pro is offered at the following tiers, billed through Apple:
      </p>
      <ul>
        <li>monthly — $2.99 per month</li>
        <li>yearly — $19.99 per year</li>
        <li>lifetime — $49.99, a one-time purchase</li>
      </ul>
      <p>
        these are introductory prices for the first 30 days, and the long-term
        price is under review. prices are shown in the app at the time of
        purchase and may vary by region and over time. the price in effect when
        you purchase is the price that governs that purchase.
      </p>

      <h2 id="refunds">refunds</h2>
      <p>
        all purchases are processed by Apple, and Apple handles all subscription
        and in-app purchase refunds under the App Store terms. we do not process
        payments directly and cannot issue refunds on Apple's behalf. to request
        a refund, use Apple's "Report a Problem" page or your Apple Account
        purchase history.
      </p>

      <h2 id="health">health data disclaimer</h2>
      <p>
        airbridge health is not a medical device and does not provide medical
        advice, diagnosis, or treatment. the app is informational only — it is a
        data-mirroring utility that moves your Fitbit and Google Health data
        into Apple Health. do not rely on it for any health or medical decision.
        always consult a qualified healthcare professional for medical
        questions, and never disregard professional advice because of something
        you saw in the app.
      </p>

      <h2 id="warranties">disclaimer of warranties</h2>
      <p>
        the app is provided "as is" and "as available," without warranties of
        any kind, whether express, implied, or statutory, including any implied
        warranties of merchantability, fitness for a particular purpose, and
        non-infringement. we do not warrant that the app will be uninterrupted,
        timely, secure, or error-free, or that any data will sync completely or
        accurately.
      </p>

      <h2 id="liability">limitation of liability</h2>
      <p>
        to the maximum extent permitted by law, we will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        any loss of data, profits, or goodwill, arising out of or related to
        your use of the app, even if advised of the possibility of such damages.
        our total liability for any claim relating to the app will not exceed
        the amount you paid for it in the twelve months before the claim arose,
        or twenty-five US dollars, whichever is greater.
      </p>

      <h2 id="termination">termination</h2>
      <p>
        you may stop using the app at any time by uninstalling it. we may
        suspend or terminate your license if you breach these terms. upon
        termination, the license granted to you ends, and you must stop using
        the app. the sections on disclaimers, limitation of liability, and
        governing law survive termination.
      </p>

      <h2 id="governing-law">governing law</h2>
      <p>
        these terms are governed by the laws of the state of Texas, USA, without
        regard to its conflict-of-laws rules. you agree that the state and
        federal courts located in Texas have exclusive jurisdiction over any
        dispute arising from these terms or the app.
      </p>
      <p>
        we may update these terms from time to time. when we do, we will update
        the effective date above and publish the revised version here. continued
        use of the app after a change means you accept the updated terms. your
        data is handled as described in our{" "}
        <Link to="/apps/airbridge/privacy">privacy policy</Link>, which is
        incorporated into these terms by reference.
      </p>

      <h2 id="contact">contact</h2>
      <p>
        questions about these terms can go to{" "}
        <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>. you can also read
        the <Link to="/apps/airbridge/privacy">privacy policy</Link> or return
        to the <Link to="/apps/airbridge">airbridge health</Link> product page.
      </p>
    </DocPage>
  )
}
