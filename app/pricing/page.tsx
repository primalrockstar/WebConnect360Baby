import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Student",
    price: "$29",
    period: "/month",
    description: "Perfect for individual EMT-B students",
    features: [
      "Access to all study materials",
      "Practice exams and quizzes",
      "Mobile app access",
      "Progress tracking",
      "Email support",
    ],
    cta: "Start Learning",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For practicing EMS professionals",
    features: [
      "Everything in Student",
      "Advanced clinical calculators",
      "Protocol library access",
      "Continuing education credits",
      "Priority support",
      "Offline access",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Program",
    price: "Custom",
    period: "",
    description: "Tailored for training programs",
    features: [
      "Everything in Professional",
      "Unlimited student accounts",
      "Analytics dashboard",
      "Custom content integration",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that&apos;s right for you. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={plan.highlighted ? "border-primary shadow-lg relative" : ""}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Can I switch plans later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be 
                  reflected in your next billing cycle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and can arrange invoicing for 
                  institutional customers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Is there a student discount?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students enrolled in accredited EMS programs receive a 20% discount. 
                  Contact us for verification details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What&apos;s included in the free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your 14-day free trial includes full access to all features of your selected 
                  plan. No credit card required to start.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Still Have Questions?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Our team is here to help. Contact us for a personalized demo.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
