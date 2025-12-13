import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Network, CheckCircle2, Heart, Sparkles, TrendingUp, Users2 } from "lucide-react"

export const metadata = {
  title: "ROOT - Foundation Platform",
  description: "The foundation platform for individuals and growing teams who value simplicity and organic growth.",
}

export default function RootPage() {
  const features = [
    {
      icon: Heart,
      title: "Simple & Intuitive",
      description: "No steep learning curve. Get started in minutes, not days."
    },
    {
      icon: Sparkles,
      title: "Essential Tools",
      description: "Everything you need to get started, nothing you don't."
    },
    {
      icon: TrendingUp,
      title: "Grow at Your Pace",
      description: "Scale naturally as your needs evolve over time."
    },
    {
      icon: Users2,
      title: "Community Support",
      description: "Learn from a vibrant community of users just like you."
    }
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals just getting started",
      features: [
        "Up to 5 users",
        "Essential features",
        "Community support",
        "Regular updates",
        "Mobile access",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      description: "For small teams ready to expand",
      features: [
        "Up to 20 users",
        "All essential features",
        "Priority community support",
        "Advanced analytics",
        "Team collaboration tools",
        "Priority email support"
      ],
      highlighted: true
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm">
              <Network className="h-4 w-4 text-accent" />
              <span>Foundation Platform</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-accent">ROOT</span>
              <br />
              Your Foundation for Growth
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The perfect starting point for individuals and small teams. Simple, intuitive, and designed to grow with you—without the complexity or cost of enterprise platforms.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild variant="secondary" size="lg" className="px-8">
                <Link href="#pricing" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for Simplicity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ROOT provides everything you need to get started and grow, without overwhelming complexity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-accent/40 transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl">Why ROOT?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Start quickly with an intuitive, easy-to-learn interface",
                    "Pay only for what you need—no enterprise overhead",
                    "Grow organically without forced upgrades or limitations",
                    "Join a supportive community of fellow users",
                    "Regular feature updates based on user feedback",
                    "Simple pricing that's transparent and predictable"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Straightforward Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No surprises. Just honest pricing that grows with you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted
                    ? "border-2 border-accent shadow-xl"
                    : "border-2"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader className="space-y-4 pb-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div>
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    variant={tier.highlighted ? "secondary" : "outline"}
                  >
                    <Link href="#contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
            <CardContent className="flex flex-col items-center text-center space-y-6 p-12">
              <Network className="h-16 w-16 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Plant Your ROOT Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Join thousands of individuals and small teams who have chosen ROOT as their foundation for growth.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button asChild variant="secondary" size="lg" className="px-8">
                  <Link href="#pricing">Get Started Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/">Compare with THE RIG</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
