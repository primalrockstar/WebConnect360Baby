import { Button } from "@/components/ui/button"

export default function InstitutionsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">For Institutions & Programs</h1>
      <p className="mb-6 text-muted-foreground max-w-2xl">
        EmeritaClinical<sup>TM</sup> supports EMS programs with analytics, content libraries, and compliance. EMT-B Core is demo-ready today;
        every other track is targeting App Store and Google Play launches in 2026.
      </p>
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
          <ul className="list-disc list-inside">
            <li>Student analytics dashboard</li>
            <li>Exam and assessment tools</li>
            <li>Content library</li>
            <li>Bulk licensing options</li>
            <li>FERPA/HIPAA compliant</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Request Program Demo</h2>
          <div className="space-y-4 rounded-2xl border border-white/10 p-6">
            <p className="text-muted-foreground">
              EMT-B Core demos are conducted via live walkthroughs with our WebConnect360 team. Email us with your cohort size,
              onboarding goals, and a preferred timeframe, and we&apos;ll coordinate the session.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Include institution/program name and location</li>
              <li>Note desired demo participants (faculty, cohort, leadership)</li>
              <li>Mention any LMS/compliance requirements</li>
            </ul>
            <Button asChild className="w-full">
              <a href="mailto:demo@webconnect360.com">Email demo@webconnect360.com</a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Demos are reviewed within one business day. AEMT, Paramedic, and specialty tools will begin external pilots ahead of their 2026 releases.
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500">We never share your information. Demo requests are reviewed within 1 business day.</p>
    </div>
  );
}
