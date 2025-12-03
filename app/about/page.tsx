import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const providerBenefits = [
  "Accelerate learning",
  "Reinforce retention",
  "Simulate real clinical decision-making",
  "Prepare students for certification exams",
  "Keep certified providers sharp on shift",
]

const philosophy = [
  {
    title: "Learn Fast",
    body:
      "Adaptive quizzing, scenario engines, and spaced repetition help build real competence—not just memorization.",
  },
  {
    title: "Train Smart",
    body:
      "Modules follow the national scope of practice for EMT-B, AEMT, and Paramedic, delivered through clean UI, digestible chapters, and modern UX.",
  },
  {
    title: "Stay Ready",
    body:
      "Quick-access references, medication guides, rhythm tools, and documentation labs keep providers confident on shift.",
  },
  {
    title: "Always Improve",
    body:
      "Each app is designed for continuous iteration, updated content, and ongoing alignment with EMS standards.",
  },
]

const suite = [
  {
    name: "🚑 EMT-B Core",
    description:
      "45 chapters of study notes, 750 flashcards, quizzes, skill walk-throughs, written scenarios, and practice tests.",
  },
  {
    name: "🔵 AEMT",
    description:
      "IV/IO access, fluid therapy, advanced pharmacology, and intermediate scenario simulations.",
  },
  {
    name: "🔥 Paramedic",
    description:
      "12-lead interpretation, advanced airways, medication math, rhythm labs, and high-level ALS scenarios.",
  },
  {
    name: "💊 MedicationsX™",
    description:
      "Provider-level formularies, interactions, contraindications, and OTC considerations.",
  },
  {
    name: "📈 RhythmLab™",
    description:
      "Basic-to-advanced ECG interpretation with adaptive drills.",
  },
  {
    name: "⚡ FlashLearn™",
    description:
      "Spaced-repetition flashcards with AI-generated distractors and custom decks.",
  },
  {
    name: "📋 PCR Practice",
    description:
      "A realistic documentation simulator for building strong ePCR habits.",
  },
  {
    name: "🎤 VoiceNotes",
    description:
      "Hands-free lecture recording with AI-generated summaries.",
  },
]

const foundersLetter = `My name is Shaun Williamson, and before I built EmeritaClinical™, I built the very first version of the EMT-B app simply to survive school.

Like every new EMT student, I was overwhelmed—45+ chapters of material, new terminology, new skills, and the constant pressure to perform. I built a small internal tool to help myself keep track of notes, flashcards, and drills. I never expected it to turn into anything bigger.

But the more I worked on it, the clearer it became: traditional study tools weren’t keeping up with the needs of today’s EMS students.

With my background in web and software design, I realized I could build something better. Something modern. Something fast. Something designed the way EMS actually works—dynamic, scenario-based, hands-on, and evolving.

That’s how EmeritaClinical™ was born.

Today, it’s growing into a full suite of tools designed for EMTs, AEMTs, and Paramedics—apps that accelerate learning, reinforce retention, and sharpen critical thinking.

These apps are not meant to replace traditional EMS education. They exist to enhance it, support it, and make it more accessible.

My goal is simple: to help you learn faster, retain more, and step into the field with real confidence.

Whether you’re studying for your first certification or advancing toward Paramedic, EmeritaClinical™ was created with you in mind.

Stay sharp. Stay ready. Stay learning.

— Shaun Williamson
Founder, EmeritaClinical™`

export const metadata = {
  title: "About EmeritaClinical™",
  description:
    "Learn how EMT Shaun Williamson turned a personal study tool into the EmeritaClinical™ suite for EMT, AEMT, and Paramedic learners.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="hero-gradient grid-overlay py-20">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">About EmeritaClinical™</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Modern tools for tomorrow’s EMS providers.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Built by Emergency Medical Technician Shaun Williamson to enhance—not replace—traditional EMS education.
              EmeritaClinical™ started as a personal study tool and has grown into a neon glass platform for EMT, AEMT, and Paramedic learners.
            </p>
            <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="px-8 text-base">
                    <Link href="/suite">Explore the suite</Link>
                  </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 px-8 text-base">
                    <a href="mailto:demo@webconnect360.com" className="underline">Request an EMT-B demo</a>
              </Button>
            </div>
          </div>
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl">About EmeritaClinical™</CardTitle>
              <CardDescription>
                EmeritaClinical™ was founded by EMT Shaun Williamson, who originally built the platform to survive EMT-B school.
                The mission is simple: give every EMS student and provider the tools to learn faster, test better, and perform with confidence.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                “If one student can benefit from smarter, modern EMS study tools… an entire generation of students and providers can benefit even more.”
              </p>
              <p>
                That idea sparked a full ecosystem of intelligent, mobile-first training and reference apps supporting EMTs, AEMTs, and Paramedics at every stage of their careers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A platform built out of necessity.</h2>
          <p className="text-muted-foreground">
            EmeritaClinical™ began when Shaun created a personal web app during EMT-B school to organize notes, drills, and flashcards.
            The first version—built out of necessity—quickly revealed a bigger opportunity: modern EMS learning tools were missing.
          </p>
          <p className="text-muted-foreground">
            With his background in web and software design, Shaun realized a simple truth: if one student could benefit from smarter study tools,
            an entire generation of EMS providers could benefit even more.
          </p>
          <p className="text-muted-foreground">
            That realization became EmeritaClinical™—a growing suite of intelligent, mobile-first training and reference apps designed to support EMTs, AEMTs, and Paramedics.
          </p>
        </div>
        <Card className="border-white/10">
          <CardHeader>
            <CardTitle>Built for today’s EMS providers</CardTitle>
            <CardDescription>Education in EMS hasn’t changed much in decades. The job has.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              EmeritaClinical™ bridges the gap with tools that:
            </p>
            <ul className="space-y-2">
              {providerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              These tools are not meant to replace traditional EMS education. They enhance and strengthen it—helping students learn more effectively and providers stay ready in the field.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Technology philosophy</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The EmeritaClinical™ tech philosophy</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Every app in the EmeritaClinical™ suite is built with the same core principles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((item) => (
            <Card key={item.title} className="border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">The platform suite</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A complete, interconnected ecosystem</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            EmeritaClinical™ is expanding into a full set of adaptive study modules, medication companions, rhythm trainers, flashcard systems, documentation labs, and voice-note tools.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {suite.map((item) => (
            <Card key={item.name} className="border-white/10">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_0.8fr]">
        <Card className="border-white/10">
          <CardContent className="space-y-4 p-8">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Why it matters</p>
            <h3 className="text-3xl font-semibold">EMS education is demanding. Study time is limited.</h3>
            <p className="text-muted-foreground">
              EmeritaClinical™ exists because Shaun lived that experience—and knew it could be better. These apps enhance traditional EMS learning, reinforce classroom skills, and help students and providers stay sharp on shift.
            </p>
            <p className="text-muted-foreground">
              The mission is simple: give every EMS student and provider the tools to learn faster, test better, and perform with confidence in the field.
            </p>
            <p className="text-muted-foreground">
              Whether you’re starting your EMT journey or leveling up to Paramedic, EmeritaClinical™ is designed to grow with you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Join the waitlist</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30">
                <a href="mailto:demo@webconnect360.com">Request an EMT-B demo</a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10">
          <CardHeader>
            <CardTitle>Founder bio</CardTitle>
            <CardDescription>Shaun Williamson · Founder, EmeritaClinical™</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Shaun is an Emergency Medical Technician and software designer who created the first version of EmeritaClinical™ to manage the intense demands of EMT school.
            </p>
            <p>
              With a background in web and software development, he saw an opportunity to modernize EMS learning tools and make them more accessible for students and providers everywhere.
            </p>
            <p>
              Driven by a commitment to education, performance, and field readiness, Shaun continues to expand the platform into an ecosystem of study apps, clinical reinforcement tools, and digital training resources for the next generation of EMS professionals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardHeader>
            <CardTitle>Founder’s Letter</CardTitle>
            <CardDescription>From Shaun Williamson, Founder of EmeritaClinical™</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 whitespace-pre-line text-muted-foreground">{foundersLetter}</div>
          </CardContent>
        </Card>
      </section>

      <section id="legal" className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardHeader>
            <CardTitle>Legal notice & copyright disclaimer</CardTitle>
            <CardDescription>Transparency about ownership, sourcing, and intended use.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              EmeritaClinical™ is an independently developed EMS training and study platform founded by Emergency Medical Technician Shaun Williamson. All educational content, summaries, explanations, scenarios, flashcards, and study materials within EmeritaClinical™ are original works, AI-assisted reinterpretations, or fair-use educational derivatives created from publicly available information.
            </p>
            <p>
              EmeritaClinical™ is not affiliated with, endorsed by, or officially connected to the following organizations:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>The National Registry of Emergency Medical Technicians (NREMT)</li>
              <li>The American Academy of Orthopaedic Surgeons (AAOS)</li>
              <li>Emergency Care & Transportation of the Sick and Injured</li>
              <li>Any publisher, textbook creator, corporate training organization, or EMS certifying body</li>
            </ul>
            <p>
              References to EMS standards, skills, medications, or protocols are based on publicly available national scope-of-practice models, industry best practices, and general EMS education principles. No proprietary textbook content, diagrams, questions, or phrasing from copyrighted sources is used in the platform.
            </p>
            <p>
              EmeritaClinical™ is designed to supplement and reinforce traditional EMS education, not replace accredited coursework, approved curricula, clinical rotations, or certification programs. Users are responsible for following their local protocols, medical director guidance, and official certifying requirements.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Card className="border-white/10">
          <CardContent className="flex flex-col gap-6 p-8 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Ready to get started?</p>
            <h3 className="text-3xl font-bold sm:text-4xl">EmeritaClinical™ can help your cohort learn sharper, train smarter, and perform stronger.</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="px-10 text-base">
                <Link href="/contact">Contact the team</Link>
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
