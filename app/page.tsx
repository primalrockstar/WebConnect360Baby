import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Network, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span>Two Powerful Platforms</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Build Your Future with{" "}
              <span className="text-primary">THE RIG</span>
              {" "}& <span className="text-accent">ROOT</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the platform that matches your ambition. Whether you're building infrastructure or growing networks, we have the tools you need to succeed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="px-8">
                <Link href="#platforms" className="flex items-center gap-2">
                  Explore Platforms
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href="#compare">Compare Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Choose Your Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two distinct platforms designed for different needs. Find the one that's right for you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* THE RIG Card */}
            <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <CardHeader className="relative space-y-4 pb-8">
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">THE RIG</CardTitle>
                </div>
                <CardDescription className="text-base">
                  The powerhouse platform for builders and operators who need robust infrastructure and scalable solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <div className="space-y-3">
                  {[
                    "Enterprise-grade infrastructure",
                    "Advanced automation tools",
                    "Unlimited scalability",
                    "Priority support & onboarding",
                    "Custom integrations",
                    "Dedicated success manager"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/the-rig">
                      Learn More About THE RIG
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Perfect for teams and enterprises
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* ROOT Card */}
            <Card className="relative overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              <CardHeader className="relative space-y-4 pb-8">
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Network className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl">ROOT</CardTitle>
                </div>
                <CardDescription className="text-base">
                  The foundation platform for individuals and growing teams who value simplicity and organic growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <div className="space-y-3">
                  {[
                    "Essential toolkit for growth",
                    "Intuitive interface",
                    "Community-driven support",
                    "Flexible pricing",
                    "Easy onboarding",
                    "Regular feature updates"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 space-y-3">
                  <Button asChild variant="secondary" className="w-full" size="lg">
                    <Link href="/root">
                      Learn More About ROOT
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Perfect for individuals and small teams
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Which Platform Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare features and find your perfect match
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Choose THE RIG if you need:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Enterprise Solutions</p>
                      <p className="text-sm text-muted-foreground">Built for scale and complexity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Advanced Features</p>
                      <p className="text-sm text-muted-foreground">Powerful automation and integrations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Premium Support</p>
                      <p className="text-sm text-muted-foreground">Dedicated team at your service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Choose ROOT if you need:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Simplicity First</p>
                      <p className="text-sm text-muted-foreground">Easy to learn and use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Organic Growth</p>
                      <p className="text-sm text-muted-foreground">Start small, scale when ready</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Community Driven</p>
                      <p className="text-sm text-muted-foreground">Learn from others like you</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="border-2">
            <CardContent className="flex flex-col items-center text-center space-y-6 p-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Join thousands of users who have already chosen their platform. Start your journey today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="px-8">
                  <Link href="/the-rig">Explore THE RIG</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="px-8">
                  <Link href="/root">Explore ROOT</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
