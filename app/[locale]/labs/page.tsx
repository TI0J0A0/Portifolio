import { labs } from '@/lib/data/labs'

export default function LabsPage() {
  return (
    <div className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-xl">
        <header className="mb-10 max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cafe-terracota">Labs</p>
          <h1 className="font-serif text-4xl font-semibold text-cafe-brown md:text-6xl">
            Cybersecurity Labs
          </h1>
          <p className="mt-6 text-lg leading-8 text-cafe-muted">
            This section documents my hands-on cybersecurity practice, including SOC analysis, network traffic investigation, log review, web application security, Linux fundamentals, and secure backend concepts.
          </p>
          <p className="mt-4 text-base leading-7 text-cafe-muted">
            Each lab includes the objective, tools used, steps performed, findings, and lessons learned.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {labs.map((lab) => (
            <article key={lab.title} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
              <h2 className="font-serif text-2xl font-semibold text-cafe-dark">{lab.title}</h2>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-terracota">Objective</dt>
                  <dd className="mt-2 text-sm leading-6 text-cafe-muted">{lab.objective}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-terracota">Scenario</dt>
                  <dd className="mt-2 text-sm leading-6 text-cafe-muted">{lab.scenario}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-terracota">Steps Performed</dt>
                  <dd className="mt-2">
                    <ul className="space-y-1 text-sm text-cafe-muted">
                      {lab.steps.map((step) => (
                        <li key={step}>- {step}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-terracota">Findings</dt>
                  <dd className="mt-2 text-sm leading-6 text-cafe-muted">{lab.findings}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-terracota">What I Learned</dt>
                  <dd className="mt-2 text-sm leading-6 text-cafe-muted">{lab.learned}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {[...lab.tools, ...lab.concepts].map((item) => (
                  <span key={item} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-brown">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
