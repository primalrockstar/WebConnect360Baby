import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"

export const metadata = {
  title: "Get All 3 EMS Apps for $36.75 | EmeritaClinical",
  description: "Built by an EMS student for EMS students. EMT-B Core, ChapterFlashEMT, and PCR Trainer PRO—instant access, one-time payment.",
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative flex flex-1 items-center justify-center px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Built by an EMS student for EMS students
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Pass your NREMT.
            <br />
            <span className="text-primary">Pay once. Own forever.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Get all 3 apps for <span className="font-semibold text-foreground">$36.75</span>—EMT-B Core, ChapterFlashEMT, and PCR Trainer PRO. Instant access. No subscriptions. No downloads required.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full px-12 text-lg sm:w-auto">
              <a href="https://buy.stripe.com/3cI9AU6C5el619cat28k802" target="_blank" rel="noopener noreferrer">
                Get All 3 Apps – $36.75
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full border-white/30 sm:w-auto">
              <Link href="/apps">See what's included</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            ✓ One-time payment &nbsp;•&nbsp; ✓ Instant access &nbsp;•&nbsp; ✓ Use code <span className="font-mono font-semibold text-foreground">HOLIDAY25</span> at checkout
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="border-t border-white/10 bg-background px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to pass NREMT</h2>
            <p className="mt-3 text-lg text-muted-foreground">Three powerful apps, one simple price</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">EMT-B Core</CardTitle>
                <p className="text-sm text-muted-foreground">The flagship curriculum with 41 chapters, quizzes, and NREMT simulations.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>41 instructor-aligned chapters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Scenario + quiz mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>NREMT-style simulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">ChapterFlashEMT</CardTitle>
                <p className="text-sm text-muted-foreground">Intelligent spaced-repetition flashcards synced for EMT-B.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Spaced repetition cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>700+ EMT-B prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Syncs with Core EMT</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">PCR Trainer PRO</CardTitle>
                <p className="text-sm text-muted-foreground">Advanced documentation engine. Master the Patient Care Report.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Realistic ePCR workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Automated QA scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Scenario-linked prompts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Spotlight */}
      <section className="border-t border-white/10 bg-muted/30 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Special Offer</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Get the bundle and save</h2>
          </div>

          <Card className="border-red-500/40 shadow-[0_0_30px_rgba(248,113,113,0.2)]">
            <CardContent className="p-8">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                25% OFF HOLIDAY SPECIAL
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-muted-foreground line-through">$49</p>
                <p className="text-6xl font-bold text-foreground">$36.75</p>
                <p className="mt-2 text-sm text-muted-foreground">one-time payment (use code HOLIDAY25)</p>
              </div>

              <div className="mb-6 space-y-2">
                <p className="flex items-center justify-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  All 3 premium apps included
                </p>
                <p className="flex items-center justify-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  Instant Stripe delivery
                </p>
                <p className="flex items-center justify-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  Lifetime access, all future updates
                </p>
              </div>

              <Button asChild size="lg" className="w-full bg-red-600 text-lg hover:bg-red-500">
                <a href="https://buy.stripe.com/3cI9AU6C5el619cat28k802" target="_blank" rel="noopener noreferrer">
                  Get Full Bundle – $36.75
                </a>
              </Button>

              <p className="mt-4 text-xs text-muted-foreground">
                Or buy individual apps for $29 each on the <Link href="/apps" className="underline">apps page</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-background px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to pass your NREMT?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join EMS students using EmeritaClinical to study smarter and pass faster.
          </p>
          <Button asChild size="lg" className="px-12 text-lg">
            <a href="https://buy.stripe.com/3cI9AU6C5el619cat28k802" target="_blank" rel="noopener noreferrer">
              Get Instant Access – $36.75
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Questions? <Link href="/contact" className="underline">Contact us</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
