import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll respond 
                as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I am a...
                      </label>
                      <select
                        id="type"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select an option</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="program">Program Administrator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? Use any of the methods below to get in touch 
                  with our team.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email Support</CardTitle>
                        <CardDescription className="mt-2">
                          General Inquiries: <br />
                          <a href="mailto:hello@webconnect360.com" className="text-foreground hover:underline">
                            hello@webconnect360.com
                          </a>
                        </CardDescription>
                        <CardDescription className="mt-2">
                          Technical Help: <br />
                          <a href="mailto:tech@webconnect360.com" className="text-foreground hover:underline">
                            tech@webconnect360.com
                          </a>
                        </CardDescription>
                        <CardDescription className="mt-2">
                          Payment Issues: <br />
                          <a href="mailto:payments@webconnect360.com" className="text-foreground hover:underline">
                            payments@webconnect360.com
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle>Looking for Support?</CardTitle>
                  <CardDescription>
                    Existing customers can access our help center for FAQs, tutorials, and 
                    technical support documentation.
                  </CardDescription>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      Visit Help Center
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Common Questions
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Quick answers to questions you might have
            </p>
          </div>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What is your response time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Do you offer demos for programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We provide personalized demos for training programs and institutions. 
                  Contact us at hello@webconnect360.com to schedule a demonstration.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Which email should I use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use hello@webconnect360.com for general questions, tech@webconnect360.com for 
                  technical support, and payments@webconnect360.com for billing issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
