import { Metadata } from "next"

export const metadata: Metadata = {
  title: "EmeritaClinical™ Terms of Service",
  description: "Review the WebConnect360 LLC Terms governing use of EmeritaClinical™ educational software and services.",
}

const effectiveDate = "November 18, 2025"
const lastUpdated = "November 18, 2025"

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-10 px-4 py-12 md:px-6">
      <header className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">WebConnect360 LLC</p>
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">
          Effective Date: {effectiveDate} · Last Updated: {lastUpdated}
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground">
          By accessing or using EmeritaClinical™, you agree to these Terms of Service. If you do not agree, do not use the platform.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">2. Educational Purpose Only</h2>
        <p className="text-muted-foreground">
          EmeritaClinical™ provides supplemental study tools. It does not replace accredited EMS courses, classroom instruction, clinical hours or labs, or official certification preparation required by the NREMT or state agencies.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">3. No Affiliation</h2>
        <p className="text-muted-foreground">
          EmeritaClinical™ is not affiliated with, endorsed by, or officially connected to the NREMT, AAOS, Emergency Care & Transportation of the Sick and Injured, or any EMS publisher or certifying body. All content is original, fair-use, or based on publicly available EMS education standards.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">4. User Accounts</h2>
        <p className="text-muted-foreground">
          You are responsible for keeping login credentials secure, providing accurate information, and all activity under your account. We may suspend accounts for misuse.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
        <p className="text-muted-foreground">
          All platform content—including text, scenarios, quizzes, graphics, logos, documentation, and software—is the property of WebConnect360 LLC and protected by copyright. Users may not copy or redistribute proprietary content, use the material to create competing products, or extract large sets of questions, chapters, or flashcards.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">6. Payments & Subscriptions</h2>
        <p className="text-muted-foreground">
          Subscription fees are billed via Stripe and renew automatically unless canceled. Refunds are handled per the policies of the app store or Stripe.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">7. Prohibited Conduct</h2>
        <p className="text-muted-foreground">
          You may not reverse-engineer the platform, attempt data scraping or extraction, use the platform for illegal activity, or share unauthorized or proprietary content.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">8. Availability</h2>
        <p className="text-muted-foreground">
          We may update, modify, or discontinue parts of the service at any time. We are not liable for downtime or service interruptions.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
        <p className="text-muted-foreground">
          EmeritaClinical™ provides educational content "as is" without warranties. We are not liable for exam performance, clinical decisions, misuse of information, or damages arising from platform use. Always follow your local protocols, medical director, and certifying body requirements.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">10. Governing Law</h2>
        <p className="text-muted-foreground">These terms are governed by the laws of Nevada, USA.</p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-card/50 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold">11. Contact Us</h2>
        <p className="text-muted-foreground">
          For questions or concerns, email <a href="mailto:support@webconnect360.com" className="underline">support@webconnect360.com</a> or contact WebConnect360 LLC.
        </p>
      </section>
    </div>
  )
}
