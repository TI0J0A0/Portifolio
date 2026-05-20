import { careerTargets, securitySkills, securityTools } from '@/lib/data/security'

const learningPath = [
  'Networking fundamentals',
  'Linux fundamentals',
  'Windows security basics',
  'SOC analysis',
  'SIEM fundamentals',
  'Log analysis',
  'Incident response basics',
  'Web application security',
  'OWASP Top 10',
  'Secure backend development',
  'Cloud security fundamentals',
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
      <h2 className="font-serif text-2xl font-semibold text-cafe-dark">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function CybersecurityPage() {
  return (
    <div className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-xl">
        <header className="mb-10 max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cafe-terracota">Cybersecurity</p>
          <h1 className="font-serif text-4xl font-semibold text-cafe-brown md:text-6xl">
            Cybersecurity Focus
          </h1>
          <p className="mt-6 text-lg leading-8 text-cafe-muted">
            I am currently developing my skills in defensive security, SOC analysis, network security, secure application development, and cloud security fundamentals.
          </p>
          <p className="mt-4 text-lg leading-8 text-cafe-muted">
            My goal is to grow into a cybersecurity role where I can investigate security events, understand system behaviour, document findings clearly, and help protect applications and infrastructure.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Section title="Current Learning Path">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {learningPath.map((item) => (
                <span key={item} className="rounded-lg border border-cafe-brown/10 bg-cafe-cream-dark px-3 py-2 text-sm text-cafe-muted">
                  {item}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Career Target">
            <p className="mb-4 text-sm leading-6 text-cafe-muted">
              I am currently preparing for entry-level cybersecurity opportunities such as:
            </p>
            <div className="flex flex-wrap gap-2">
              {careerTargets.map((target) => (
                <span key={target} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-sm text-cafe-brown">
                  {target}
                </span>
              ))}
            </div>
          </Section>
        </div>

        <section className="mt-6 rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
          <h2 className="font-serif text-2xl font-semibold text-cafe-dark">Technical Skills</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(securitySkills).map(([category, items]) => (
              <div key={category} className="rounded-lg border border-cafe-brown/10 bg-cafe-cream/50 p-4">
                <h3 className="text-sm font-semibold text-cafe-dark">{category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
          <h2 className="font-serif text-2xl font-semibold text-cafe-dark">Tools I am working with</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {securityTools.map((tool) => (
              <article key={tool.name} className="rounded-lg border border-cafe-brown/10 bg-cafe-cream/50 p-4">
                <h3 className="font-serif text-xl font-semibold text-cafe-brown">{tool.name}</h3>
                <p className="mt-3 text-sm leading-6 text-cafe-muted">{tool.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
