import Link from "next/link"
import apps from "@/data/apps.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoWordmark } from "@/components/logo-wordmark"
import {
  Activity,
  ArrowUpRight,
  Check,
  Clock,
  Layers,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react"

type AppTier = "core" | "extension" | "roadmap"
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
  stripeCheckoutUrl?: string
  previewLink?: string
  bundleEligible?: boolean
}

const appsData = apps as AppEntry[]
const flagshipIds = new Set(["emt-b", "chapterflash-emt", "pcr-trainer-pro"])
const orderedApps = [
  ...appsData.filter((app) => flagshipIds.has(app.id)),
  ...appsData.filter((app) => !flagshipIds.has(app.id)),
]

const marqueeItems = [
  "NREMT-aligned competencies",
  "Scenario labs + PCR practice",
  "Adaptive flashcards",
  "Voice-first documentation",
  "Real-time cohort analytics",
  "App + mobile parity in 2026",
]

type Pillar = {
  title: string
  body: string
  points: string[]
  Icon: LucideIcon
}

const highlightPillars: Pillar[] = [
  {
    title: "Accreditation-ready content",
    body: "Every skill, medication, and scenario is mapped to EMT, AEMT, and Paramedic competencies with instructor notes built in.",
    points: ["State + NREMT tagging", "Auto-generated lesson briefs"],
    Icon: ShieldCheck,
  },
  {
    title: "Immersive training lab",
    body: "High-fidelity scenario labs, PCR drills, and flashcards feel like the field so learners can rehearse decisions before the call.",
    points: ["Scenario & PCR sync", "VoiceNotes + AI summaries"],
    Icon: Layers,
  },
  {
    title: "Program intelligence",
    body: "Live dashboards reveal cohort progress, remediation needs, and readiness signals before certification day.",
    points: ["Cohort analytics", "Automated skill tracking"],
    Icon: Activity,
  },
]

const heroStats = [
  { value: "$29", label: "One-time per app" },
  { value: "3", label: "Stripe-ready premium tools" },
  { value: "2026", label: "AEMT + Paramedic roadmap" },
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
    label: "Available in platform beta",
    className: "bg-emerald-500/10 text-emerald-200 border-emerald-500/30",
  },
  coming_soon: {
    label: "Arriving with 2026 releases",
    className: "bg-amber-400/10 text-amber-100 border-amber-400/30",
  },
  in_development: {
    label: "In development",
    className: "bg-slate-500/20 text-slate-200 border-slate-500/30",
  },
}

export default function Home() {
  const flagshipApps = orderedApps.filter((app) => flagshipIds.has(app.id))
  const purchaseReadyApps = orderedApps.filter((app) => app.tier !== "roadmap")
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
                Built by an EMS student for EMS students.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                EMT-B Core, ChapterFlashEMT, and PCR Trainer PRO ship as $29 Stripe downloads directly on EmeritaClinical.com. MedicationsEMS plus the AEMT and Paramedic tracks are currently in build with browser-based previews only—no App Store or Google Play releases planned.
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
                  Every app. One neon platform.
                </CardTitle>
                <CardDescription>
                  Built by an EMS student who needed better study tools—now helping thousands of students master EMT, AEMT, and Paramedic content faster.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-wide text-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    <Sparkles className="h-4 w-4" /> EmeritaClinical.com · Live now
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    <Clock className="h-4 w-4" /> AEMT + Paramedic · In build
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    � Stripe checkout only
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-muted-foreground">
                    All releases stay synced between the web platform, iOS, and Android so programs can approve one
                    content set, then deploy everywhere in 2026.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-white/10">
              <CardHeader className="space-y-2">
                <CardTitle className="text-base uppercase tracking-[0.3em] text-muted-foreground">
                  Flagship tracks
                </CardTitle>
                <CardDescription>New EmeritaClinical EMT logos showcased across the entire site.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-6">
                {flagshipApps.map((app) => (
                  <LogoWordmark
                    key={app.id}
                    align="center"
                    size="md"
                    subtitle={(app.shortName || app.name).toUpperCase()}
                    glow={app.status === "available"}
                    className="min-w-[160px]"
                  />
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
            Each EmeritaClinical™ app carries the original EMS curriculum Shaun built for the community—same chapters, flashcards, and documentation labs, now delivered entirely through our own Stripe-powered platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {purchaseReadyApps.map((app) => {
            const statusStyle = statusStyles[app.status]
            const waitlistHref = `/contact?type=waitlist&app=${app.id}`
            return (
              <Card key={app.id} className="glass-card flex h-full flex-col border-white/10">
                <CardHeader className="space-y-4">
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
        <Card className="border-white/10">
          <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">About EmeritaClinical™</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Modern EMS training built by EMS student Shaun Williamson.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                What began as a personal study tool during Shaun’s EMS training quickly evolved into a complete suite of apps designed to help EMS students and providers learn faster and perform with confidence. Our mission is simple: enhance EMS education—not replace it.
              </p>
              <p className="text-muted-foreground">
                The growing EmeritaClinical™ suite includes study modules, medication companions, rhythm trainers, flashcard systems, documentation labs, and voice-note tools—all designed around real EMS workflows.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Mission</p>
              <p className="text-lg font-semibold">
                EMS learning should be modern, intelligent, and accessible.
              </p>
              <p className="text-muted-foreground text-sm">
                EmeritaClinical™ exists to support classroom learning, improve retention, and keep providers sharp on shift—with neon glass polish that matches the new logo system.
              </p>
            </div>
          </CardContent>
        </Card>
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

      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-10 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Designed with EMS educators</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Glass-card storytelling with enterprise depth
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            Every section elevates EMS-specific storytelling—skills matrices, protocol refreshers, and cohort dashboards presented in a clear, high-contrast layout built for night crews and classroom displays alike.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlightPillars.map(({ title, body, points, Icon }) => (
            <Card key={title} className="border-white/10">
              <CardHeader className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription>{body}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto space-y-8 px-4 md:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Platform lineup</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">All apps live on this platform first</h2>
            <p className="max-w-2xl text-muted-foreground">
              Whether it&apos;s the EMT core curriculum, MedicationsEMS reference, or RhythmLab for ECG mastery, everything is
              orchestrated inside the neon interface and delivered directly through EmeritaClinical.com—no marketplace listings required.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start border-white/30">
            <Link href="/suite">See the detailed suite overview</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orderedApps.map((app) => (
            <Card key={app.id} className="border-white/10">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <LogoWordmark
                    align="left"
                    size="md"
                    subtitle={(app.shortName || app.name).toUpperCase()}
                    glow={app.status === "available"}
                  />
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[app.status as AppStatus]?.className}`}>
                    {statusStyles[app.status as AppStatus]?.label ?? "In development"}
                  </span>
                </div>
                <div className="space-y-2">
                  <CardTitle>{app.name}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {app.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                    <Sparkles className="h-3.5 w-3.5" /> Web-first delivery
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                    <Clock className="h-3.5 w-3.5" /> AEMT + Paramedic · In build
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                    � Stripe-secured access
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Availability · Web-first</p>
              <h3 className="text-3xl font-semibold">
                Every module ships to EmeritaClinical.com—no App Store or Google Play releases.
              </h3>
              <p className="text-muted-foreground">
                Programs pilot, purchase, and deploy the entire suite via secure browser builds with Stripe-protected access. Cohorts stay in sync across EMT-B Core, PCR Trainer PRO, and the in-progress MedicationsEMS, AEMT, and Paramedic tracks.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                  <Users className="h-4 w-4 text-primary" /> Student + program roles included
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                  <Sparkles className="h-4 w-4 text-secondary" /> Neon/glass UI preserved in-browser
                </span>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 p-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">MedicationsEMS</p>
                <p className="text-lg font-semibold">In development · pharmacology pilots open</p>
                <p className="text-sm text-muted-foreground">Provider-ready dosing references and interaction checks shipping as a web companion.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">AEMT</p>
                <p className="text-lg font-semibold">In build · invite-only browser previews</p>
                <p className="text-sm text-muted-foreground">Advanced skills, IV/IO refreshers, and analytics layered on top of the core suite.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Paramedic</p>
                <p className="text-lg font-semibold">Scoping · ALS labs + telemetry modules</p>
                <p className="text-sm text-muted-foreground">Capstone-ready drills authored for programs that want full-stack ALS prep without an app store dependency.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardContent className="flex flex-col gap-6 p-8 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Take action</p>
            <h3 className="text-3xl font-bold sm:text-4xl">
              Ready to put the neon glass platform in front of your cohort?
            </h3>
            <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
              Request a guided tour, secure branded onboarding with the new EMT logos, and lock in early access updates for MedicationsEMS, AEMT, and Paramedic builds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="px-10 text-base">
                <Link href="/contact">Book a walkthrough</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 px-10 text-base">
                <Link href="/suite">Download the suite brief</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      </div>
  )
}
