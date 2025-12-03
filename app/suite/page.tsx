import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Apple, FileText, Mic, Play } from "lucide-react"

type CardStatus = "launch" | "dev"

type SuiteCard = {
  id: string
  title: string
  tagline: string
  body: string
  badge: string
  status: CardStatus
  features: string[]
  logo?: string
  logoWidth?: number
  logoHeight?: number
  icon?: ReactNode
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

const badgeStyles: Record<CardStatus, string> = {
  launch: "bg-emerald-500/15 text-emerald-100 border border-emerald-500/30",
  dev: "bg-amber-400/10 text-amber-100 border border-amber-400/30",
}

const primaryTracks: SuiteCard[] = [
  {
    id: "emt-core",
    title: "EmeritaClinical™ · EMT-B Core",
    tagline: "Your foundation for the entire EMS pathway.",
    body:
      "Covers full EMT-B competency: assessment, BLS skills, oxygen therapy, fundamentals of pharmacology, and realistic entry-level scenarios. Anchors the entire EMT/AEMT/Paramedic suite releasing to both stores in 2026.",
    badge: "APP STORE + GOOGLE PLAY · 2026",
    status: "launch",
    features: ["Adaptive learning paths", "Instructor & cohort dashboards"],
  logo: "/images/EmeritaClinicallogo.png",
    primaryCta: { label: "Learn more", href: "/suite#emt-core" },
    secondaryCta: { label: "Request EMT-B demo", href: "mailto:demo@webconnect360.com" },
  },
  {
    id: "aemt",
    title: "EmeritaClinical™ · AEMT",
    tagline: "Builds directly on EMT-B with invasive skills and expanded medications.",
    body:
      "Covers IV/IO access, fluid therapy, intermediate pharmacology, airway adjuncts, and scenario-based decision-making designed for crews advancing into advanced practice.",
    badge: "IN DEVELOPMENT · INTERNAL BUILDS",
    status: "dev",
    features: ["Scenario labs", "Competency matrix tracking"],
  logo: "/images/EmeritaClinicallogo.png",
    primaryCta: { label: "Learn more", href: "/suite#aemt" },
    secondaryCta: { label: "Join waitlist", href: "/contact?type=waitlist" },
  },
  {
    id: "paramedic",
    title: "EmeritaClinical™ · Paramedic",
    tagline: "Advanced ALS training built on top of EMT and AEMT mastery.",
    body:
      "Includes 12-lead ECG interpretation, advanced airways, ALS medications, infusion management, and high-stakes scenarios. Designed to support paramedic candidates through capstone and preceptor workflows.",
    badge: "IN DEVELOPMENT · INTERNAL BUILDS",
    status: "dev",
    features: ["Telemetry-ready modules", "Preceptor tools & ALS algorithms"],
  logo: "/images/EmeritaClinicallogo.png",
    primaryCta: { label: "Learn more", href: "/suite#paramedic" },
    secondaryCta: { label: "Join waitlist", href: "/contact?type=waitlist" },
  },
]

const platformCards: SuiteCard[] = [
  {
    id: "pcr",
    title: "EmeritaClinical™ · PCR Practice",
    tagline: "The documentation lab for every level of provider.",
    body:
      "Practice ePCR writing with realistic cases, automated QA scoring, NFC equipment tagging, and scenario-linked documentation drills aligned with EMT/AEMT/Paramedic competencies.",
    badge: "IN DEVELOPMENT · INTERNAL BUILDS",
    status: "dev",
    features: ["Tablet-first interface", "QA scoring engine"],
    icon: <FileText className="h-10 w-10 text-primary" />,
    primaryCta: { label: "Learn more", href: "/suite#pcr" },
    secondaryCta: { label: "Join waitlist", href: "/contact?type=waitlist" },
  },
  {
    id: "flashcards",
    title: "EmeritaClinical™ · Flashcards",
    tagline: "Accelerated reinforcement for all three certification levels.",
    body:
      "Adaptive flashcards using spaced repetition and AI-generated distractors. Covers EMT basics through ALS topics, designed for quick reps on shift or offline study.",
    badge: "IN DEVELOPMENT · INTERNAL BUILDS",
    status: "dev",
    features: ["Spaced repetition engine", "Offline-ready study mode"],
    logo: "/images/flashlearn.png",
    logoWidth: 160,
    logoHeight: 60,
    primaryCta: { label: "Learn more", href: "/suite#flashcards" },
    secondaryCta: { label: "Join waitlist", href: "/contact?type=waitlist" },
  },
  {
    id: "voicenotes",
    title: "EmeritaClinical VoiceNotes™",
    tagline: "Hands-free capture for students and crews across all levels.",
    body:
      "Record lectures or shift notes with instant AI summaries and secure storage. Evolving into a standalone voice platform supporting EMT, AEMT, and Paramedic learning.",
    badge: "IN DEVELOPMENT · INTERNAL BUILDS",
    status: "dev",
    features: ["AI-generated summaries", "Encrypted vault storage"],
    icon: <Mic className="h-10 w-10 text-secondary" />,
    primaryCta: { label: "Learn more", href: "/suite#voicenotes" },
    secondaryCta: { label: "Join waitlist", href: "/contact?type=waitlist" },
  },
]

const cardGroups = [
  { id: "tracks", cards: primaryTracks },
  { id: "tools", cards: platformCards },
]

function SuiteCtaButton({ href, label, variant }: { href: string; label: string; variant?: "default" | "outline" }) {
  const isMailto = href.startsWith("mailto:")
  return (
    <Button
      asChild
      size="sm"
      variant={variant ?? "default"}
      className={variant === "outline" ? "border-white/30" : undefined}
    >
      {isMailto ? <a href={href}>{label}</a> : <Link href={href}>{label}</Link>}
    </Button>
  )
}

function SuiteCardTile({ card }: { card: SuiteCard }) {
  return (
    <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-[1.01] border border-white/5">
      <CardHeader className="space-y-4">
        {card.logo ? (
          <Image
            src={card.logo}
            alt={`${card.title} logo`}
            width={card.logoWidth ?? 220}
            height={card.logoHeight ?? 90}
            className="h-16 w-auto object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 160px, 220px"
            priority={card.status === "launch"}
          />
        ) : (
          <div>{card.icon}</div>
        )}
        <div className="space-y-1">
          <CardTitle className="text-2xl">{card.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{card.tagline}</p>
        </div>
        <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${badgeStyles[card.status]}`}>
          {card.badge}
        </span>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p className="text-muted-foreground leading-relaxed">{card.body}</p>
        <div className="space-y-1">
          {card.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {card.primaryCta && (
            <SuiteCtaButton href={card.primaryCta.href} label={card.primaryCta.label} />
          )}
          {card.secondaryCta && (
            <SuiteCtaButton href={card.secondaryCta.href} label={card.secondaryCta.label} variant="outline" />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function SuitePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The Complete EmeritaClinical<sup>TM</sup> Suite
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From EMT-B to Paramedic — comprehensive training tools for every level of EMS education
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="w-full max-w-3xl">
              <div className="marquee-blur border border-white/10 rounded-2xl px-4 py-3 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">All apps launching everywhere in 2026.</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground/80">Available on</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-foreground/90">
                    <Apple className="h-3.5 w-3.5" /> App Store
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-foreground/90">
                    <Play className="h-3.5 w-3.5" /> Google Play
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-foreground/90">
                    🔵 EmeritaClinical.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Suite */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              All EmeritaClinical<sup>TM</sup> Platform Apps
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Comprehensive education and training tools for every EMS provider
            </p>
          </div>
          {cardGroups.map((group, idx) => (
            <div
              key={group.id}
              className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${idx > 0 ? "mt-10" : ""}`}
            >
              {group.cards.map((card) => (
                <SuiteCardTile key={card.id} card={card} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built for Success
              </h2>
              <p className="text-muted-foreground md:text-xl">
                EmeritaClinical Suite is designed with input from experienced EMS educators and 
                successful EMT-B students. Our tools have helped thousands pass their certification 
                exams and excel in their EMS careers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Updated regularly with latest protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Mobile and desktop compatible</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Offline access available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Progress tracking and analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <p className="text-center text-muted-foreground italic">
                [Placeholder for product screenshot or demo video]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join EmeritaClinical today and access all suite features
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">See Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
