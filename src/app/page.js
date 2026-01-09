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
      description: "A high-fidelity clinical simulation engine for medical protocol mastery.",
      features: ["Clinical Simulations", "Protocol Training", "Scenario-Based Learning"],
      icon: "🏥",
      technologies: ["Simulation Engine", "Medical Protocols", "Real-time Feedback"]
    },
    {
      title: "Kronyql",
      description: "A forensic settlement protocol and sovereign estate engine for creative intellectual property.",
      features: ["Estate Planning", "Asset Protection", "Fintech Integration"],
      icon: "🎨",
      technologies: ["Fintech", "Cryptography", "Artist-Focused Tools"]
    },
    {
      title: "EmeritaCRM",
      description: "An enterprise data management platform designed for institutional research and strict compliance auditing.",
      features: ["Clinical Data", "Compliance Management", "Data Orchestration"],
      icon: "📊",
      technologies: ["Healthcare Data", "Compliance", "Enterprise Systems"]
    },
    {
      title: "Emerita Sovereign Engine (ESE)",
      description: "The PaaS core. Built with FastAPI, AWS Fargate, and RDS, it provides the security and logic layer for all Emerita platforms.",
      features: ["PaaS Core", "Sovereign Security", "Multi-Asset Integration"],
      icon: "⚙️",
      technologies: ["FastAPI", "AWS Fargate", "RDS"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Sovereign Infrastructure for the High-Stakes Economy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              EmeritaClinical™ is a design house for high-integrity systems. We bridge the gap between foundational engineering and mission-critical application layers, leveraging the Emerita Sovereign Engine (ESE) to provide absolute data ownership and operational resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Explore the Engine
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Architectural Consultation
              </button>
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

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Foundational Pedigree</h2>
          <p className="text-lg text-gray-300 mb-6">
            Three decades of infrastructure experience in mission-critical systems.
          </p>
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            <p className="text-gray-300">
              Our foundation includes engineering mission-critical communications for high-volume flight operations during the Bosnian Crisis at Aviano AFB. This experience established our "Zero-Fail" mindset, bringing military-grade networking reliability to enterprise software and small business solutions.
            </p>
            <p className="text-gray-300">
              Over thirty years, we've maintained performance and data integrity across Defense, Clinical Research, and Media sectors, delivering systems that operate under the highest stakes.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Sovereign Consultation Intake</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Domain</label>
              <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="">Select Domain</option>
                <option value="clinical">Clinical</option>
                <option value="fintech">Fintech</option>
                <option value="media">Media</option>
                <option value="education">Education</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Critical Requirement</label>
              <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="">Select Requirement</option>
                <option value="security">Security</option>
                <option value="automated-splits">Automated Splits</option>
                <option value="data-scrubbing">Data Scrubbing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sovereignty Score (How important is owning your data?)</label>
              <input type="range" min="1" max="10" className="w-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 - Minimal</span>
                <span>10 - Critical</span>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              Submit Requirement
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Requirement received. Your architectural audit will be reviewed with clinical rigor. Expect a response within 48 hours.
          </p>
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
