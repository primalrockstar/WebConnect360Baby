import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Smartphone, Download, Zap, BookOpen, Bell, Lock } from "lucide-react"

export default function EMTBAppPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                EMT-B Mobile App
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Study anywhere, anytime with the ProMedixEMS mobile app. 
                Your complete EMT-B study companion in your pocket.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <p className="text-center text-muted-foreground italic">
                [Placeholder for app screenshots or mockup]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Powerful features designed for mobile learning
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Mobile-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intuitive interface optimized for mobile devices. Study efficiently 
                  during breaks, commutes, or whenever you have spare time.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Offline Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Download content for offline access. Continue your studies without 
                  internet connection, perfect for on-the-go learning.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Flashcards & Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interactive flashcards and practice quizzes covering all EMT-B topics. 
                  Master concepts through active recall and spaced repetition.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bell className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Smart Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set study reminders and track your daily goals. Stay consistent with 
                  personalized notifications and progress tracking.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your data is encrypted and secure. We respect your privacy and never 
                  share your personal information or study data.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Instant Sync</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamlessly sync your progress across all devices. Start studying on 
                  your phone and continue on your tablet or computer.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Features Detail */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:gap-16">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                <p className="text-center text-muted-foreground italic">
                  [Practice questions interface screenshot]
                </p>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Practice Questions Everywhere
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Access thousands of practice questions modeled after the National Registry exam. 
                  Each question includes detailed explanations to help you understand not just the 
                  correct answer, but why it&apos;s correct.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Over 2,000 NREMT-style questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Detailed answer explanations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Performance tracking by topic</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Track Your Progress
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Comprehensive analytics show you exactly where you stand. Identify weak areas 
                  and focus your study time where it matters most. Watch your confidence grow as 
                  you master each topic.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Visual progress dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Topic mastery indicators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                    <span>Study streak tracking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                <p className="text-center text-muted-foreground italic">
                  [Progress tracking dashboard screenshot]
                </p>
              </div>
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
                Start Studying Smarter Today
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Download the app and get started with your free trial
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Now
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
