import fs from "fs"
import path from "path"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoWordmark } from "@/components/logo-wordmark"
import { Check, ShoppingCart } from "lucide-react"

const appsDataPath = path.join(process.cwd(), "data", "apps.json")
const apps = JSON.parse(fs.readFileSync(appsDataPath, "utf-8"))

type AppStatus = "available" | "coming_soon" | "in_development"

type AppEntry = {
  id: string
  name: string
  shortName: string
  status: AppStatus
  tagline: string
  description: string
  features: string[]
  price?: number
  stripeCheckoutUrl?: string
  previewLink?: string
}

const statusConfig: Record<AppStatus, { label: string; className: string }> = {
  available: {
    label: "Available now",
    className: "bg-emerald-500/10 text-emerald-200 border border-emerald-500/30",
  },
  coming_soon: {
    label: "Coming soon",
    className: "bg-amber-500/10 text-amber-100 border border-amber-400/30",
  },
  in_development: {
    label: "In development",
    className: "bg-slate-500/20 text-slate-200 border border-slate-500/30",
  },
}

export default function AppsPage() {
  const appsList = apps as AppEntry[]
  const purchaseReadyApps = appsList.filter((app) => app.status !== "in_development")
  const roadmapApps = appsList.filter((app) => app.status === "in_development")

  return (
    <div className="flex flex-col gap-10 py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-3xl border border-white/10 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Stripe-powered releases</p>
          <h1 className="mt-4 text-4xl font-bold">EmeritaClinical™ EMS Apps</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            The exact ProMedixEMS lineup from WebConnect360 now lives here: EMT-B Core, ChapterFlashEMT, and PCR Trainer PRO—all $29 one-time purchases.
          </p>
          <p className="text-muted-foreground">
            Built by EMT student Shaun Williamson with neon-glass polish, each module enhances accredited programs with flashcards, documentation labs, and competency-mapped drills.
          </p>
          <p className="mt-4 text-muted-foreground">
            MedicationsEMS, AEMT, and Paramedic experiences remain in development for coordinated App Store and Google Play launches in 2026.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <a href="#apps-grid">Browse the suite</a>
            </Button>
            <Button asChild variant="outline" className="border-white/20">
              <a href="mailto:demo@webconnect360.com">Request instructor preview</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Not a replacement for accredited EMS education—built to enhance and support it.</p>
        </div>
      </section>

      <section id="apps-grid" className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {purchaseReadyApps.map((app) => {
            const status = statusConfig[app.status]
            const previewHref = app.previewLink ?? `/contact?type=demo&app=${app.id}`
            const waitlistHref = `/contact?type=waitlist&app=${app.id}`

            return (
              <Card key={app.id} className="glass-card flex h-full flex-col gap-5 p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <LogoWordmark align="center" size="md" subtitle={(app.shortName || app.name).toUpperCase()} glow={app.status === "available"} />
                  <h2 className="text-2xl font-semibold">{app.name}</h2>
                  <p className="text-muted-foreground">{app.tagline}</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${status.className}`}>
                    {status.label}
                  </span>
                  {app.price && (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      <ShoppingCart className="h-4 w-4 text-primary" /> ${app.price} one-time
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{app.description}</p>
                <div className="space-y-2 text-sm">
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-foreground/80">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="border-white/20">
                    <a href={previewHref}>Request preview</a>
                  </Button>
                  {app.stripeCheckoutUrl ? (
                    <Button asChild className="flex-1 min-w-[140px]">
                      <a href={app.stripeCheckoutUrl} target="_blank" rel="noopener noreferrer">
                        Buy now{app.price ? ` · $${app.price}` : ""}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild className="flex-1 min-w-[140px]" variant="secondary">
                      <a href={waitlistHref}>Join waitlist</a>
                    </Button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {roadmapApps.length > 0 && (
        <section className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-3xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Roadmap · 2026</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {roadmapApps.map((app) => (
                <div key={app.id} className="rounded-2xl border border-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold">{app.name}</p>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusConfig[app.status].className}`}>
                      {statusConfig[app.status].label}
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
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
