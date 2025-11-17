import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Users, BarChart3, Settings, HeadphonesIcon, Award, Shield } from "lucide-react"

export default function ForProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Solutions for EMS Training Programs
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Empower your students and enhance your program with ProMedixEMS. 
                Comprehensive tools designed specifically for EMS educators and institutions.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Programs Choose ProMedixEMS
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Everything you need to support student success and program excellence
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Unlimited Student Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provide access to all your students at no additional cost per user. 
                  Scale your program without worrying about licensing fees.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track student progress, identify at-risk learners, and measure program 
                  effectiveness with comprehensive analytics dashboards.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Custom Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Upload your own protocols, study materials, and assessments. 
                  Customize the platform to match your curriculum and teaching style.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <HeadphonesIcon className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your program gets a dedicated account manager and priority technical 
                  support to ensure smooth implementation and ongoing success.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Certification Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Content aligned with National Registry standards ensures your students 
                  are prepared for certification exams and real-world practice.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>FERPA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enterprise-grade security and full FERPA compliance protect student 
                  data and meet institutional requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:gap-16">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Student Management Made Simple
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Easily manage student accounts, track cohorts, and monitor progress across 
                  your entire program. Bulk import students, assign content, and generate reports 
                  with just a few clicks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Bulk student enrollment and management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Cohort-based organization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Automated progress reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Integration with LMS systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                <p className="text-center text-muted-foreground italic">
                  [Placeholder for student management dashboard screenshot]
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                <p className="text-center text-muted-foreground italic">
                  [Placeholder for analytics dashboard screenshot]
                </p>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Powerful Analytics & Insights
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Make data-driven decisions to improve your program. Identify trends, measure 
                  outcomes, and intervene early when students need extra support. Track everything 
                  from individual student performance to program-wide metrics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Real-time performance dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Custom report generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Early intervention alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Accreditation reporting support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Leading Programs
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardDescription className="italic">
                  &quot;ProMedixEMS has transformed how we deliver content to our students. The 
                  analytics help us identify struggling students early, and our pass rates 
                  have improved significantly.&quot;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Program Director, Metro EMS Academy</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription className="italic">
                  &quot;The customization options allow us to integrate our own protocols and 
                  maintain our program&apos;s unique approach while leveraging their excellent 
                  core content.&quot;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Lead Instructor, State College EMS Program</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Elevate Your Program?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Schedule a personalized demo to see how ProMedixEMS can benefit your institution
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Program Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
