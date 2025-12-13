import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, CheckCircle2, Shield, Rocket, Users, BarChart3 } from "lucide-react"

export const metadata = {
  title: "THE RIG - Enterprise Platform",
  description: "The powerhouse platform for builders and operators who need robust infrastructure and scalable solutions.",
}

export default function TheRigPage() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards to protect your data and operations."
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized infrastructure ensures maximum performance even under heavy load."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Advanced tools for seamless teamwork across departments and locations."
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Comprehensive insights and reporting to drive data-informed decisions."
    }
  ]

  const pricingTiers = [
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "For growing teams ready to scale",
      features: [
        "Up to 50 users",
        "Advanced automation",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited users",
        "Dedicated infrastructure",
        "24/7 premium support",
        "Custom development",
        "Advanced security features",
        "Dedicated account manager"
      ],
      highlighted: true
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span>Enterprise Platform</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-primary">THE RIG</span>
              <br />
              Built for Scale
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The powerhouse platform designed for enterprises and ambitious teams who need robust infrastructure, advanced automation, and unlimited scalability.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" className="px-8">
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
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
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
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              THE RIG comes packed with enterprise-grade features designed to accelerate your growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
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
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Why THE RIG?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Enterprise-grade infrastructure that scales with your business",
                    "Advanced automation tools that save hours every week",
                    "Unlimited scalability - never hit a ceiling",
                    "Priority support with dedicated success manager",
                    "Custom integrations with your existing tools",
                    "SOC 2 Type II compliance and bank-level security"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include core features.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted
                    ? "border-2 border-primary shadow-xl"
                    : "border-2"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      Most Popular
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
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${tier.highlighted ? "" : "variant-outline"}`}
                    size="lg"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link href="#contact">
                      {tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
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
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="flex flex-col items-center text-center space-y-6 p-12">
              <Zap className="h-16 w-16 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Power Up?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Join leading enterprises who trust THE RIG to power their operations. Start your 14-day free trial today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="px-8">
                  <Link href="#pricing">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/">Compare with ROOT</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
