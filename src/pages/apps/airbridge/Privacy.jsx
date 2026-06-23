import DocPage from "../../../shell/DocPage.jsx"
import { Link } from "../../../router/router.jsx"

const toc = [
  { id: "summary", label: "the short version" },
  { id: "what-we-collect", label: "what we collect" },
  { id: "google-health", label: "Google Health connection" },
  { id: "healthkit", label: "Apple HealthKit data" },
  { id: "payments", label: "payments and subscriptions" },
  { id: "tracking", label: "no analytics, no tracking" },
  { id: "storage", label: "where data lives" },
  { id: "deletion", label: "deleting your data" },
  { id: "rights", label: "your rights (CCPA + GDPR)" },
  { id: "children", label: "children's privacy" },
  { id: "changes", label: "changes to this policy" },
  { id: "contact", label: "contact" },
]

export default function AirbridgePrivacy() {
  return (
    <DocPage
      kicker="airbridge health"
      title="privacy policy"
      effective="June 23, 2026"
      updated="June 23, 2026"
      toc={toc}
      seoTitle="airbridge health — privacy policy"
      seoDescription="how airbridge health handles your data: on-device processing, no analytics, no server-side storage. read scopes only on Google Health, tokens in the iOS Keychain."
    >
      <h2 id="summary">the short version</h2>
      <p>
        airbridge health is the bridge between your Fitbit and Apple Health. it
        was built privacy-first, and the architecture reflects that: your health
        data is processed on your iPhone and is never sent to a server we
        control, because we do not run one for your data.
      </p>
      <ul>
        <li>
          all health data is processed on-device. we never see, transmit, or
          store it.
        </li>
        <li>
          we request read-only access to Google Health. we never ask to write
          back to Google.
        </li>
        <li>
          no analytics SDK, no third-party tracking, no crash reporters, no
          advertising identifiers.
        </li>
        <li>
          uninstall the app and your data is gone. there is nothing for us to
          delete server-side, because we store nothing.
        </li>
      </ul>
      <p>
        the sections below explain each of these in plain language. this policy
        is written to comply with Apple App Store Review Guidelines section 5.1
        on data collection and storage.
      </p>

      <h2 id="what-we-collect">what we collect</h2>
      <p>
        we do not collect your health data on any server. airbridge runs
        entirely on your iPhone. the only data the app touches is the data
        needed to mirror your Fitbit activity into Apple Health, and that work
        happens locally on your device.
      </p>
      <p>
        we have no account system. you do not create a username or password with
        us, and we do not ask for your name, email address, phone number, or
        location.
      </p>

      <h2 id="google-health">Google Health connection</h2>
      <p>
        airbridge connects to Google Health using OAuth 2.0 with PKCE, the
        modern, secure authorization standard recommended by Google for mobile
        apps. when you connect your account, we request read-only access to the
        following data categories:
      </p>
      <ul>
        <li>activity</li>
        <li>heart rate</li>
        <li>sleep</li>
        <li>body measurements</li>
      </ul>
      <p>
        we request <strong>read scopes only</strong>. airbridge never asks for
        permission to write data back to Google, and it cannot modify anything
        in your Google account.
      </p>
      <p>
        when you authorize the connection, Google issues a refresh token so the
        app can keep your data current without asking you to sign in repeatedly.
        that refresh token is stored in the iOS Keychain — Apple's secure,
        enclave-backed credential store — and it never leaves your device. we
        cannot read it, and it is not transmitted to us.
      </p>

      <h2 id="healthkit">Apple HealthKit data</h2>
      <p>
        airbridge reads from and writes to Apple HealthKit entirely on your
        iPhone. these reads and writes happen locally, through Apple's own
        on-device HealthKit framework.
      </p>
      <p>
        we never see, transmit, or store your HealthKit data on our servers.
        when airbridge writes your Fitbit activity into Apple Health, it does so
        on-device and attributes the data clearly to its source. Apple does not
        permit HealthKit data to be used for advertising or sold to data
        brokers, and airbridge does neither.
      </p>

      <h2 id="payments">payments and subscriptions</h2>
      <p>
        airbridge Pro is sold through Apple's StoreKit, with payment processing
        handled by Apple and Stripe. we never see your card numbers. the only
        purchase information airbridge receives is Apple's anonymized purchase
        receipt, which the app uses to verify your entitlement — that is, to
        confirm whether you have an active Pro subscription or lifetime
        purchase.
      </p>
      <p>
        the receipt does not contain your payment details or personal identity.
        billing, renewals, and refunds are managed by Apple under your Apple
        Account.
      </p>

      <h2 id="tracking">no analytics, no tracking</h2>
      <p>
        airbridge contains no analytics SDK, no third-party tracking, no crash
        reporters, and no advertising identifiers. we do not build a profile of
        you, we do not follow you across apps or websites, and we do not share
        or sell any data, because we do not collect any to begin with.
      </p>

      <h2 id="storage">where data lives</h2>
      <p>
        your health data lives in two places, both on your iPhone: Apple
        HealthKit's local store, and the app's own on-device working state. your
        Google refresh token lives in the iOS Keychain. none of these leave your
        device, and we have no copy of any of them.
      </p>

      <h2 id="deletion">deleting your data</h2>
      <p>
        to delete everything airbridge has touched, uninstall the app. removing
        the app clears its on-device state and its Keychain entries, including
        the Google refresh token. data you previously wrote into Apple Health
        remains under your control in the Health app, where you can review or
        delete it at any time.
      </p>
      <p>
        there is nothing for us to delete server-side, because we store nothing.
        if you also want to revoke airbridge's read access to Google Health, you
        can do so in your Google account's connected-apps settings.
      </p>

      <h2 id="rights">your rights (CCPA and GDPR)</h2>
      <p>
        privacy laws such as the California Consumer Privacy Act (CCPA) and the
        European Union's General Data Protection Regulation (GDPR) give you
        rights to access, correct, port, and delete personal data a company
        holds about you. airbridge can honor these rights instantly for a simple
        reason: we hold nothing. we have no server-side copy of your health
        data, no account, and no profile, so there is nothing for us to disclose
        on request and nothing for us to delete on our end.
      </p>
      <p>
        the data the app touches stays under your direct control. to exercise
        the practical equivalent of a deletion request, uninstall the app, which
        removes its on-device state and Keychain entries (see deleting your data
        above). your data in Apple Health remains yours to review or delete in
        the Health app, and you can revoke airbridge's read access in your
        Google account at any time. if you have any rights request or question,
        email <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>.
      </p>

      <h2 id="rights">your rights (CCPA and GDPR)</h2>
      <p>
        privacy laws such as the California Consumer Privacy Act (CCPA) and the
        European Union's General Data Protection Regulation (GDPR) give you
        rights to access, correct, port, and delete personal data a company
        holds about you. airbridge can honor these rights instantly for a simple
        reason: we hold nothing. we have no server-side copy of your health
        data, no account, and no profile, so there is nothing for us to disclose
        on request and nothing for us to delete on our end.
      </p>
      <p>
        the data the app touches stays under your direct control. to exercise
        the practical equivalent of a deletion request, uninstall the app, which
        removes its on-device state and Keychain entries (see deleting your data
        above). your data in Apple Health remains yours to review or delete in
        the Health app, and you can revoke airbridge's read access in your
        Google account at any time. if you have any rights request or question,
        email <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>.
      </p>

      <h2 id="rights">your rights (CCPA and GDPR)</h2>
      <p>
        privacy laws such as the California Consumer Privacy Act (CCPA) and the
        European Union's General Data Protection Regulation (GDPR) give you
        rights to access, correct, port, and delete personal data a company
        holds about you. airbridge can honor these rights instantly for a simple
        reason: we hold nothing. we have no server-side copy of your health
        data, no account, and no profile, so there is nothing for us to disclose
        on request and nothing for us to delete on our end.
      </p>
      <p>
        the data the app touches stays under your direct control. to exercise
        the practical equivalent of a deletion request, uninstall the app, which
        removes its on-device state and Keychain entries (see deleting your data
        above). your data in Apple Health remains yours to review or delete in
        the Health app, and you can revoke airbridge's read access in your
        Google account at any time. if you have any rights request or question,
        email <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>.
      </p>

      <h2 id="rights">your rights (CCPA and GDPR)</h2>
      <p>
        privacy laws such as the California Consumer Privacy Act (CCPA) and the
        European Union's General Data Protection Regulation (GDPR) give you
        rights to access, correct, port, and delete personal data a company
        holds about you. airbridge can honor these rights instantly for a simple
        reason: we hold nothing. we have no server-side copy of your health
        data, no account, and no profile, so there is nothing for us to disclose
        on request and nothing for us to delete on our end.
      </p>
      <p>
        the data the app touches stays under your direct control. to exercise
        the practical equivalent of a deletion request, uninstall the app, which
        removes its on-device state and Keychain entries (see deleting your data
        above). your data in Apple Health remains yours to review or delete in
        the Health app, and you can revoke airbridge's read access in your
        Google account at any time. if you have any rights request or question,
        email <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>.
      </p>

      <h2 id="children">children's privacy</h2>
      <p>
        airbridge health is not directed at children under 13. we do not
        knowingly collect information from children, and the app has no account
        system that would gather such information.
      </p>

      <h2 id="changes">changes to this policy</h2>
      <p>
        if this policy changes, we will update the effective date at the top of
        this page and publish the revised version here. because the app's
        privacy posture is rooted in its on-device architecture, material
        changes would require an app update, which Apple reviews before release.
      </p>

      <h2 id="contact">contact</h2>
      <p>
        questions about privacy can go to{" "}
        <a href="mailto:matt@uxuiai.org">matt@uxuiai.org</a>. you can also read
        the <Link to="/apps/airbridge/terms">terms of service</Link> or return
        to the <Link to="/apps/airbridge">airbridge health</Link> product page.
      </p>
      <p>
        the entity controlling your data under this policy is Austin Web Company
        LLC (d/b/a experience Architects, renaming to uxuiai.org LLC), 1115 W
        10th St, Apt 108, Austin, TX 78703. this policy is written to comply
        with the Apple App Store Review Guidelines section 5.1 on data
        collection and storage, the California Consumer Privacy Act (CCPA), and
        the General Data Protection Regulation (GDPR).
      </p>
      <p>
        the entity controlling your data under this policy is Austin Web Company
        LLC (d/b/a experience Architects, renaming to uxuiai.org LLC), 1115 W
        10th St, Apt 108, Austin, TX 78703. this policy is written to comply
        with the Apple App Store Review Guidelines section 5.1 on data
        collection and storage, the California Consumer Privacy Act (CCPA), and
        the General Data Protection Regulation (GDPR).
      </p>
    </DocPage>
  )
}
