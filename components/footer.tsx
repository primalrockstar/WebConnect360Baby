import Link from "next/link"

const navigation = {
  product: [
    { name: "Platform Suite", href: "/suite" },
    { name: "All Apps", href: "/apps" },
    { name: "EMT-B Core", href: "/emt-b-app" },
    { name: "For Programs", href: "/for-programs" },
    { name: "Enterprise Services", href: "/enterprise-services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Legal notice", href: "/about#legal" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-foreground">EmeritaClinical<sup>™</sup></span>
            <p className="text-sm leading-6 text-muted-foreground">
              Enterprise Platforms for Clinical Education & Research
            </p>
            <div className="rounded-2xl border border-white/10 p-4 text-sm text-muted-foreground shadow-inner">
              <p className="font-semibold text-foreground">About EmeritaClinical™</p>
              <p className="mt-2">
                EmeritaClinical™ delivers professional-grade educational technology for EMS programs, institutions, and healthcare educators. Our platforms support EMT, AEMT, and Paramedic training with competency-based learning modules, clinical simulation tools, and analytics dashboards.
              </p>
              <p className="mt-2">
                Designed to enhance accredited EMS education programs, our enterprise solutions help instructors track student progress, ensure competency achievement, and prepare learners for certification success.
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} EmeritaClinical™. All rights reserved.<br />
            EmeritaClinical™ is a registered trademark. Enterprise Platforms for Clinical Education & Research.
            <br />EmeritaClinical™ is an independent EMS education platform and is not affiliated with NREMT, AAOS, or any certifying body.
          </p>
        </div>
      </div>
    </footer>
  )
}
