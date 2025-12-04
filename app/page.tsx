import Link from "next/link"
import Image from "next/image"
import apps from "@/data/apps.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoWordmark } from "@/components/logo-wordmark"
import {
  ArrowUpRight,
  Check,
  Clock,
  ShoppingCart,
  Sparkles,
} from "lucide-react"

type AppTier = "core" | "extension" | "roadmap" | "enterprise"
type AppStatus = "available" | "coming_soon" | "in_development"

type AppEntry = {
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
  logo?: string
  stripeCheckoutUrl?: string
  previewLink?: string
  bundleEligible?: boolean
}

const appsData = apps as AppEntry[]
const emsAppsIds = new Set(["emt-b", "chapterflash-emt", "pcr-trainer-pro"])
const enterpriseAppsIds = new Set(["emeritacrm"])
const orderedApps = [
  ...appsData.filter((app) => emsAppsIds.has(app.id)),
  ...appsData.filter((app) => enterpriseAppsIds.has(app.id)),
  ...appsData.filter((app) => !emsAppsIds.has(app.id) && !enterpriseAppsIds.has(app.id)),
]

const marqueeItems = [
  "NREMT-aligned competencies",
  "Scenario labs + PCR practice",
  "Adaptive flashcards",
  "Voice-first documentation",
  "Real-time cohort analytics",
  "Direct web-based access",
]

const heroStats = [
  { value: "$29", label: "One-time per app" },
  { value: "4", label: "Enterprise-grade platforms" },
  { value: "Web", label: "Available now" },
]

const pricingTiers = [
  {
    id: "single",
    title: "Single Tool",
    price: "$29",
    subtext: "/ app",
    description: "Choose EMT-B Core, ChapterFlashEMT, or PCR Trainer PRO.",
    features: ["Lifetime access", "Offline ready", "Email receipt via Stripe"],
    cta: { label: "Select your app", href: "#ems-suite", variant: "outline" as const },
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

const statusStyles: Record<AppStatus, { label: string; className: string }> = {
  available: {
    label: "Available now",
    className: "bg-emerald-500/10 text-emerald-200 border-emerald-500/30",
  },
  coming_soon: {
    label: "Coming soon",
    className: "bg-amber-400/10 text-amber-100 border-amber-400/30",
  },
  in_development: {
    label: "In development",
    className: "bg-slate-500/20 text-slate-200 border-slate-500/30",
  },
}

export default function Home() {
  const emsApps = orderedApps.filter((app) => emsAppsIds.has(app.id))
  const enterpriseApps = orderedApps.filter((app) => enterpriseAppsIds.has(app.id))
  const purchaseReadyApps = orderedApps.filter((app) => app.tier !== "roadmap" && app.tier !== "enterprise")
  const roadmapApps = orderedApps.filter((app) => app.tier === "roadmap")

  return (
    <div className="flex flex-col gap-16 pb-20">
      <section className="relative overflow-hidden hero-gradient grid-overlay py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              <span className="text-primary">EmeritaClinical™</span>
              Platform
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Enterprise Platforms for Clinical Education & Research
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                EmeritaClinical™ delivers professional-grade learning platforms for EMS education. EMT-B Core, ChapterFlashEMT, and PCR Report Sim are available now with enterprise licensing options for institutions and programs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="px-8 text-base">
                <Link href="#ems-suite" className="flex items-center gap-2">
                  Shop the EMS suite
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 px-8 text-base">
                <Link href="/contact">Request a program preview</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {heroStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card className="border-white/10">
              <CardHeader className="space-y-3">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Professional EMS Learning Platform
                </CardTitle>
                <CardDescription>
                  Designed in collaboration with active EMS instructors and program directors to deliver content that meets accreditation standards and prepares students for real-world clinical practice.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-muted-foreground">
                    All platforms are available exclusively through EmeritaClinical.com—no app stores, no waiting. Direct access to professional EMS education tools.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-white/10">
              <CardHeader className="space-y-2">
                <CardTitle className="text-base uppercase tracking-[0.3em] text-muted-foreground">
                  EMS Education Suite
                </CardTitle>
                <CardDescription>Professional learning platforms with EmeritaClinical branding.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-6">
                {emsApps.map((app) => (
                  app.logo && (
                    <div key={app.id} className="flex flex-col items-center gap-2">
                      <Image
                        src={app.logo}
                        alt={app.name}
                        width={120}
                        height={120}
                        className="rounded-lg"
                      />
                      <span className="text-xs font-semibold text-muted-foreground">{app.shortName}</span>
                    </div>
                  )
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="ems-suite" className="container mx-auto space-y-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">EMS apps suite</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Professional-grade tools. Honest $29 pricing.
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            EmeritaClinical™ provides enterprise-grade educational tools with transparent pricing and lifetime access. No subscriptions, no hidden fees—just professional learning platforms built for EMS education.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {purchaseReadyApps.map((app) => {
            const statusStyle = statusStyles[app.status]
            const waitlistHref = `/contact?type=waitlist&app=${app.id}`
            return (
              <Card key={app.id} className="glass-card flex h-full flex-col border-white/10">
                <CardHeader className="space-y-4">
                  {app.logo && (
                    <div className="flex justify-center">
                      <Image
                        src={app.logo}
                        alt={app.name}
                        width={140}
                        height={140}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{app.name}</CardTitle>
                      <CardDescription>{app.tagline}</CardDescription>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle?.className ?? "border-white/20 text-muted-foreground"}`}
                    >
                      {statusStyle?.label ?? "In roadmap"}
                    </span>
                  </div>
                  {app.badge && <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{app.badge}</span>}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col space-y-5">
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                  <div className="space-y-2 text-sm">
                    {app.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-foreground/80">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {app.price && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <ShoppingCart className="h-4 w-4 text-primary" />
                        <span>${app.price} one-time · Stripe</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {app.previewLink ? (
                        <Button asChild variant="outline" className="border-white/20">
                          <Link href={app.previewLink}>Request preview</Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="border-white/20" disabled>
                          Preview unavailable
                        </Button>
                      )}
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
        {roadmapApps.length > 0 && (
          <div className="rounded-2xl border border-white/10 p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-[0.4em] text-xs">Roadmap</span>
              {roadmapApps.map((app) => (
                <span key={app.id} className="font-semibold text-foreground/80">
                  {app.name} · {statusStyles[app.status]?.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Enterprise Platform Section */}
      <section className="container mx-auto space-y-8 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Enterprise Platform</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Research Management at Scale
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            EmeritaCRM is our flagship enterprise research platform designed for institutions, programs, and large-scale clinical education research initiatives.
          </p>
        </div>
        {enterpriseApps.map((app) => (
          <Card key={app.id} className="glass-card border-2 border-primary/30 shadow-xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
              <div className="flex justify-center">
                {app.logo && (
                  <Image
                    src={app.logo}
                    alt={app.name}
                    width={280}
                    height={280}
                    className="rounded-2xl"
                  />
                )}
              </div>
              <div className="space-y-6">
                {app.badge && (
                  <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary">
                    {app.badge}
                  </span>
                )}
                <div>
                  <h3 className="text-3xl font-bold mb-2">{app.name}</h3>
                  <p className="text-lg text-muted-foreground">{app.tagline}</p>
                </div>
                <p className="text-muted-foreground">{app.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="px-8">
                    <a href={app.previewLink} target="_blank" rel="noopener noreferrer">
                      Explore Platform
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8">
                    <Link href="/contact">Request Enterprise Demo</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container mx-auto space-y-10 px-4 md:px-6">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional grade. Honest pricing.</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Every purchase runs through secure EmeritaClinical™ Stripe links—no subscriptions, just one-time downloads.
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
        <div className="mb-10 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">About EmeritaClinical™</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Professional EMS Learning Platforms
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            The apps are only available here—no App Store, no Google Play. Direct access to enterprise-grade EMS education tools.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="marquee-blur flex flex-wrap items-center justify-center gap-4 rounded-2xl px-6 py-4 text-sm text-muted-foreground">
          {marqueeItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-2 text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </div>
      </section>
      </div>
  )
}
