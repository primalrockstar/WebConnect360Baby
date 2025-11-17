import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileText, Video, Calculator, ClipboardCheck, BookOpen, Stethoscope } from "lucide-react"

export default function SuitePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                ProMedixEMS Suite
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A comprehensive collection of tools designed for EMS students and professionals. 
                Everything you need in one place.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Suite Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete EMS Education Tools
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Access all the resources you need for successful EMS training
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Study Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive study guides, flashcards, and practice questions aligned with 
                  the National Registry standards.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Video className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step video demonstrations of essential skills and procedures for 
                  EMT-Basic certification.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calculator className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Clinical Calculators</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Medical calculators for vital signs, drug dosages, and other critical 
                  patient care calculations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ClipboardCheck className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Practice Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Full-length practice exams that simulate the National Registry test 
                  environment and difficulty.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Protocol Library</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick reference to common EMS protocols and treatment algorithms for 
                  emergency situations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Stethoscope className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Skills Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your progress in mastering essential EMT skills and competencies 
                  throughout your training.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
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
                ProMedixEMS Suite is designed with input from experienced EMS educators and 
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
                Join ProMedixEMS today and access all suite features
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
