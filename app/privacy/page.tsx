import { Metadata } from "next"

export const metadata: Metadata = {
  title: "EmeritaClinical™ Privacy Policy",
  description:
    "Learn how EmeritaClinical™ and WebConnect360 LLC collect, use, and protect information across mobile and web apps for EMS education.",
}

const effectiveDate = "November 18, 2025"
const lastUpdated = "November 18, 2025"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-10 px-4 py-12 md:px-6">
      <header className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">WebConnect360 LLC</p>
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Effective Date: {effectiveDate} · Last Updated: {lastUpdated}
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">1. Overview</h2>
        <p className="text-muted-foreground">
          EmeritaClinical™ ("we," "us," or "our") is an educational software platform created by WebConnect360 LLC.
          We provide mobile and web-based study tools for EMT, AEMT, and Paramedic learners. This Privacy Policy
          explains how we collect, use, and protect information when you use our apps or website.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground">A. Information You Provide</h3>
            <ul className="ml-5 list-disc space-y-2">
              <li>Name, email, password (if you create an account)</li>
              <li>Support messages or form submissions</li>
              <li>Voluntary user feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">B. Automatically Collected Information</h3>
            <ul className="ml-5 list-disc space-y-2">
              <li>Device type, operating system, app version</li>
              <li>IP address, browser type</li>
              <li>Usage analytics (e.g., pages visited, time spent)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">C. No PHI (Protected Health Information)</h3>
            <p>
              EmeritaClinical™ does not collect or store any PHI. Our public-facing educational apps are not HIPAA-covered
              services. StudyConnectPro™ is HIPAA-ready but operates under a separate privacy policy.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
        <p className="text-muted-foreground">We use collected information to:</p>
        <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
          <li>Provide and improve app functionality</li>
          <li>Manage accounts and subscriptions</li>
          <li>Respond to support requests</li>
          <li>Analyze app performance</li>
          <li>Prevent misuse or abuse of the platform</li>
        </ul>
        <p className="text-muted-foreground font-semibold">We never sell personal information.</p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">4. Cookies & Tracking</h2>
        <p className="text-muted-foreground">
          We may use cookies solely for analytics and user experience. You can disable cookies in your browser settings.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
        <p className="text-muted-foreground">We may use trusted partners such as:</p>
        <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
          <li>Stripe (payments)</li>
          <li>Netlify / Vercel / AWS (hosting)</li>
          <li>Analytics tools (aggregate usage only)</li>
        </ul>
        <p className="text-muted-foreground">
          These services maintain their own privacy practices.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">6. Data Security</h2>
        <p className="text-muted-foreground">
          We use industry-standard encryption, secure hosting, and access controls to protect data. No system is 100%
          secure, but we take every reasonable measure available.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">7. Children’s Privacy</h2>
        <p className="text-muted-foreground">
          EmeritaClinical™ is intended for adults and students in accredited EMS programs. We do not knowingly collect information from
          children under 13.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">8. Your Rights</h2>
        <p className="text-muted-foreground">You may request:</p>
        <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
          <li>Access to your personal data</li>
          <li>Correction</li>
          <li>Deletion</li>
          <li>Account closure</li>
        </ul>
        <p className="text-muted-foreground">
          Contact <a href="mailto:privacy@webconnect360.com" className="underline">privacy@webconnect360.com</a> to submit a request.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
        <p className="text-muted-foreground">
          We may update this policy periodically. Continued use of the platform indicates acceptance of the new terms.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">10. Contact Us</h2>
        <p className="text-muted-foreground">
          For questions, email <a href="mailto:privacy@webconnect360.com" className="underline">privacy@webconnect360.com</a> or write to WebConnect360 LLC.
        </p>
      </section>
    </div>
  )
}
