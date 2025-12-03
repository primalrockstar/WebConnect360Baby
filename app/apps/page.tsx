import fs from "fs";
import path from "path";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const appsDataPath = path.join(process.cwd(), "data", "apps.json");
const apps = JSON.parse(fs.readFileSync(appsDataPath, "utf-8"));

const statusConfig: Record<string, { label: string; className: string }> = {
  available: {
    label: "Available",
    className:
      "bg-green-500/15 text-green-200 border border-green-500/30",
  },
  coming_soon: {
    label: "Coming Soon",
    className:
      "bg-yellow-500/10 text-yellow-200 border border-yellow-400/30",
  },
};

export default function AppsPage() {
  return (
    <div className="flex flex-col gap-10 py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-3xl border border-white/10 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">App Store · Google Play · Platform</p>
          <h1 className="mt-4 text-4xl font-bold">EmeritaClinical<sup>TM</sup> Apps</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Built by an EMT for EMTs. Originally created as a personal EMT-B study tool, EmeritaClinical™ has grown into a powerful suite of apps for EMT, AEMT, and Paramedic students.
          </p>
          <p className="text-muted-foreground">
            EmeritaClinical™ enhances traditional EMS education with adaptive study modules, custom flashcards, skills walkthroughs, scenario-based learning, medication guides, rhythm tools, PCR practice, and AI-powered note recording. Designed to help you learn faster, retain more, and stay sharp—whether you’re preparing for class, exams, or the field.
          </p>
          <p className="mt-4 text-muted-foreground">
            EMT-B Core is available for guided demos today, while every other EmeritaClinical™ app is actively in development for coordinated App Store and Google Play releases in 2026.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="secondary">
              <a href="mailto:demo@webconnect360.com">Request EMT-B demo</a>
            </Button>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">App Store + Google Play · 2026</p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Not a replacement for accredited EMS education—built to enhance and support it.</p>
          <p className="mt-2 text-xs text-muted-foreground">
            App Store / Google Play Disclaimer: EmeritaClinical™ mobile listings are independently published by EMS professional Shaun Williamson, remain subject to the review policies of Apple and Google, and are not affiliated with NREMT, AAOS, or any certifying authority.
          </p>
        </div>
      </section>
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app: any) => {
          const status = statusConfig[app.status] ?? statusConfig.coming_soon;

          return (
            <Card key={app.id} className="glass-card p-6 flex flex-col">
              {app.logo && (
                <div className="flex justify-center mb-4">
                  <Image
                    src={app.logo}
                    alt={`${app.name} logo`}
                    width={220}
                    height={80}
                    className="h-16 w-auto object-contain drop-shadow-lg"
                  />
                </div>
              )}
              <h2 className="text-2xl font-semibold text-center">{app.name}</h2>
              <p className="mb-4 text-muted-foreground text-center">{app.description}</p>
              <div className="mb-4 flex justify-center">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide ${status.className}`}>
                  {status.label}
                </span>
              </div>
            <ul className="mb-4 text-sm list-disc list-inside text-left">
              {app.features.map((feature: string) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="flex gap-2 mb-4">
              <Button asChild size="sm" variant="outline" disabled={app.appStoreUrl === '#'}>
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">App Store</a>
              </Button>
              <Button asChild size="sm" variant="outline" disabled={app.playStoreUrl === '#'}>
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">Play Store</a>
              </Button>
            </div>
            {app.screenshots && app.screenshots.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {app.screenshots.map((src: string, idx: number) => (
                  <Image key={idx} src={src} alt={`${app.name} screenshot ${idx+1}`} width={160} height={90} className="rounded shadow" />
                ))}
              </div>
            )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
