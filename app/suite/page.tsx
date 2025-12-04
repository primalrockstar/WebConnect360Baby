import Link from "next/link"
import apps from "@/data/apps.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoWordmark } from "@/components/logo-wordmark"
import { Apple, Check, Clock, Play, ShoppingCart } from "lucide-react"

type AppTier = "core" | "extension" | "roadmap"
type AppStatus = "available" | "coming_soon" | "in_development"

type SuiteApp = {
  id: string
  name: string
  shortName: string
  tier: AppTier
  status: AppStatus
  tagline: string
  description: string
  features: string[]
  price?: number
  badge?: string
  stripeCheckoutUrl?: string
  previewLink?: string
  bundleEligible?: boolean
}

const statusStyles: Record<AppStatus, { label: string; className: string }> = {
  available: {
    label: "Available now",
    className: "bg-emerald-500/10 text-emerald-200 border border-emerald-500/30",
  },
  coming_soon: {
    label: "Coming soon",
    className: "bg-amber-400/10 text-amber-100 border border-amber-400/30",
  },
  in_development: {
    label: "In development",
    className: "bg-slate-500/20 text-slate-200 border border-slate-500/30",
  },
}

const appsData = apps as SuiteApp[]
const liveApps = appsData.filter((app) => app.tier !== "roadmap")
const roadmapApps = appsData.filter((app) => app.tier === "roadmap")

const pricingTiers = [
  {
    id: "single",
    title: "Single Tool",
    price: "$29",
    subtext: "/ app",
    description: "Choose EMT-B Core, ChapterFlashEMT, or PCR Trainer PRO.",
    features: ["Lifetime access", "Offline ready", "Email receipt via Stripe"],
    cta: { label: "Select your app", href: "#live-apps", variant: "outline" as const },
  },
  {
    id: "bundle",
    title: "EmeritaClinical Bundle",
    badge: "25% OFF HOLIDAY SPECIAL",
    original: "$49",
    price: "$36.75",
    subtext: "one-time (use code HOLIDAY25)",
    description: "Bundle EMT-B Core + ChapterFlashEMT + PCR Trainer PRO.",
    features: ["3 premium tools", "Promo code ready", "Instant Stripe delivery"],
    cta: { label: "Buy full bundle", href: "https://buy.stripe.com/3cI9AU6C5el619cat28k802" },
  },
  {
    id: "classroom",
    title: "Classroom",
    price: "Bulk",
    subtext: "pricing",
    description: "Volume discounts plus instructor dashboards.",
    features: ["Instructor console", "Volume discounts", "Custom onboarding"],
    cta: { label: "Contact sales", href: "/contact", variant: "outline" as const },
  },
]

export default function SuitePage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-muted/60 to-background">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">EmeritaClinical™ Suite</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The WebConnect360 EMS ecosystem, now neon and Stripe-connected.
          </h1>
          <p className="max-w-3xl text-muted-foreground md:text-lg">
            EMT-B Core, ChapterFlashEMT, and PCR Trainer PRO mirror the ProMedixEMS experience with $29 one-time Stripe checkouts. MedicationsEMS and the AEMT/Paramedic tracks stay on the same roadmap toward 2026 App Store and Google Play launches.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#live-apps">Browse live apps</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30">
              <Link href="/contact">Book an instructor preview</Link>
            </Button>
          </div>
          <div className="marquee-blur flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Apple className="h-4 w-4" /> App Store · 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Play className="h-4 w-4" /> Google Play · 2026
            </span>
            <span className="inline-flex items-center gap-2">🔵 EmeritaClinical.com · Beta now</span>
          </div>
        </div>
      </section>

      <section id="live-apps" className="container mx-auto space-y-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Live + coming soon</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Every EMS tool, same pricing as WebConnect360.</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            These glass-card modules are the cash-flow engine: purchase-ready Stripe links for $29 apps plus transparent waitlists for what ships next.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {liveApps.map((app) => {
            const status = statusStyles[app.status]
            const previewHref = app.previewLink ?? `/contact?type=demo&app=${app.id}`
            const waitlistHref = `/contact?type=waitlist&app=${app.id}`

            return (
              <Card key={app.id} className="glass-card flex h-full flex-col border-white/10">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <LogoWordmark align="left" size="md" subtitle={(app.shortName || app.name).toUpperCase()} glow={app.status === "available"} />
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${status.className}`}>
                      {status.label}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{app.name}</CardTitle>
                    <CardDescription>{app.tagline}</CardDescription>
                  </div>
                  {app.badge && <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">{app.badge}</span>}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col space-y-5 text-sm text-muted-foreground">
                  <p>{app.description}</p>
                  <div className="space-y-2">
                    {app.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-foreground/80">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {app.price && (
                      <div className="flex items-center gap-2 font-semibold text-foreground">
                        <ShoppingCart className="h-4 w-4 text-primary" /> ${app.price} one-time via Stripe
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" className="border-white/20">
                        <Link href={previewHref}>Request preview</Link>
                      </Button>
                      {app.stripeCheckoutUrl ? (
                        <Button asChild className="flex-1 min-w-[140px]">
                          <a href={app.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer">
                            Buy now{app.price ? ` · $${app.price}` : ""}
                          </a>
                        </Button>
                      ) : (
                        <Button asChild className="flex-1 min-w-[140px]" variant="secondary">
                          <Link href={waitlistHref}>Join waitlist</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {roadmapApps.length > 0 && (
        <section className="container mx-auto px-4 md:px-6">
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl">Roadmap · 2026</CardTitle>
              <CardDescription>Same architecture, higher scope—AEMT and Paramedic follow the neon playbook.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              {roadmapApps.map((app) => (
                <div key={app.id} className="rounded-2xl border border-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold">{app.name}</p>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[app.status].className}`}>
                      {statusStyles[app.status].label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{app.tagline}</p>
                  <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                    {app.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      <section className="container mx-auto space-y-10 px-4 md:px-6">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional grade. Honest pricing.</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Exactly what WebConnect360 published—single apps at $29, bundle at $36.75 with HOLIDAY25, and classroom plans on request.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`border-white/10 ${tier.id === "bundle" ? "border-red-500/40 shadow-[0_0_30px_rgba(248,113,113,0.2)]" : ""}`}
            >
              <CardHeader className="space-y-4 text-center">
                {tier.badge && (
                  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {tier.badge}
                  </span>
                )}
                <CardTitle className="text-2xl">{tier.title}</CardTitle>
                <div className="space-y-1">
                  {tier.original && <p className="text-sm text-muted-foreground line-through">{tier.original}</p>}
                  <p className="text-4xl font-bold text-foreground">{tier.price}</p>
                  {tier.subtext && <p className="text-sm text-muted-foreground">{tier.subtext}</p>}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2 text-sm">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-foreground/80">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {tier.cta && (
                  <Button
                    asChild
                    className={tier.id === "bundle" ? "w-full bg-red-600 hover:bg-red-500" : "w-full"}
                    variant={tier.cta.variant ?? "default"}
                  >
                    {tier.cta.href.startsWith("http") ? (
                      <a href={tier.cta.href} target="_blank" rel="noopener noreferrer">
                        {tier.cta.label}
                      </a>
                    ) : (
                      <Link href={tier.cta.href}>{tier.cta.label}</Link>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardContent className="flex flex-col gap-6 p-8 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Take action</p>
            <h3 className="text-3xl font-bold sm:text-4xl">Ready to deploy the neon suite to your cohort?</h3>
            <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
              Book a walkthrough, lock in Stripe bundle access, and stay synced with the EmeritaClinical™ releases as AEMT and Paramedic tracks go live.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="px-10 text-base">
                <Link href="/contact">Book a walkthrough</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 px-10 text-base">
                <Link href="#live-apps">Download the suite brief</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
