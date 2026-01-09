// Simple components for deployment
const Card = ({ children, className = "" }) => <div className={`bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 ${className}`}>{children}</div>
const CardHeader = ({ children, className = "" }) => <div className={`p-6 border-b border-white/10 ${className}`}>{children}</div>
const CardTitle = ({ children, className = "" }) => <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
const CardContent = ({ children }) => <div className="p-6">{children}</div>
const Badge = ({ children, className = "" }) => <span className={`inline-block px-2 py-1 text-xs bg-white/20 rounded ${className}`}>{children}</span>

export default function LandingPage() {
  const platforms = [
    {
      title: "The Rig",
      description: "High-fidelity clinical protocol simulation platform for advanced medical training and scenario-based learning.",
      features: ["Clinical Simulations", "Protocol Training", "Real-time Feedback", "Performance Analytics"],
      icon: "🏥",
      technologies: ["Simulation Engine", "Medical Protocols", "AI Training", "Cloud Infrastructure"]
    },
    {
      title: "Kronyql",
      description: "Forensic fintech and sovereign estate protocol designed specifically for artists' wealth management and asset protection.",
      features: ["Estate Planning", "Asset Protection", "Fintech Integration", "Artist-Focused Tools"],
      icon: "🎨",
      technologies: ["Fintech", "Cryptography", "Estate Protocols", "Artist Platforms"]
    },
    {
      title: "EmeritaCRM",
      description: "Enterprise clinical data management system for comprehensive healthcare data orchestration and compliance.",
      features: ["Clinical Data", "Compliance Management", "Data Orchestration", "Enterprise Integration"],
      icon: "📊",
      technologies: ["Healthcare Data", "Compliance", "Enterprise Systems", "Data Security"]
    },
    {
      title: "Emerita Sovereign Engine (ESE)",
      description: "The Platform-as-a-Service core engine powering all flagship assets with sovereign-grade security and performance.",
      features: ["PaaS Core", "Sovereign Security", "Multi-Asset Integration", "High Performance"],
      icon: "⚙️",
      technologies: ["PaaS", "Sovereign Infrastructure", "Security", "Scalability"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Emerita Clinical™<br />The Sovereign Infrastructure Design House
              </h1>
              <p className="text-xl lg:text-2xl text-white/80">
                30 Years of High-Level Performance in Military, Medical, and Artistic Sectors
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Delivering sovereign-grade infrastructure solutions that power critical operations across defense,
                healthcare, and creative industries with uncompromising security and performance standards.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge className="px-4 py-2 text-sm">
                  Sovereign Security
                </Badge>
                <Badge className="px-4 py-2 text-sm">
                  Enterprise Infrastructure
                </Badge>
                <Badge className="px-4 py-2 text-sm">
                  Mission-Critical Solutions
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {platforms.map((platform, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <CardTitle>{platform.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {platform.features.map((feature, idx) => (
                          <Badge key={idx} className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {platform.technologies.map((tech, idx) => (
                          <Badge key={idx} className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            Emerita Clinical™ - The Sovereign Infrastructure Design House
          </p>
          <p className="text-white/40 text-xs mt-2">
            Delivering sovereign-grade solutions for mission-critical operations
          </p>
        </div>
      </section>
    </div>
  )
}
