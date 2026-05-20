import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { labs } from '@/lib/data/labs'
import { securityProjects } from '@/lib/data/securityProjects'
import { securitySkills } from '@/lib/data/security'

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cafe-terracota">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold text-cafe-dark md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-cafe-muted">{text}</p>}
    </div>
  )
}

function CyberVisual() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-xl border border-cafe-brown/15 bg-cafe-cream-dark/80 p-6 shadow-2xl shadow-cyan-950/30" aria-hidden="true">
      <div className="absolute inset-x-8 top-8 h-px bg-cafe-brown/25" />
      <div className="absolute bottom-8 left-8 right-8 top-12 rounded-lg border border-cafe-brown/20 bg-[#081827]" />
      <div className="absolute left-14 top-20 h-36 w-36 rounded-full border border-cafe-brown/30" />
      <div className="absolute left-20 top-26 h-24 w-24 rounded-full border border-cafe-terracota/40" />
      <div className="absolute left-28 top-34 h-8 w-8 rounded-full bg-cafe-brown/80 shadow-[0_0_35px_rgba(103,232,249,0.45)]" />
      <div className="absolute right-14 top-24 w-52 space-y-3">
        <div className="h-2 w-full rounded-full bg-cafe-brown/60" />
        <div className="h-2 w-4/5 rounded-full bg-cafe-moss/60" />
        <div className="h-2 w-3/5 rounded-full bg-cafe-terracota/60" />
      </div>
      <div className="absolute bottom-16 left-14 right-14 grid grid-cols-3 gap-3">
        {['LOGS', 'SOC', 'API', 'DNS', 'IAM', 'SIEM'].map((label) => (
          <div key={label} className="rounded border border-cafe-brown/15 bg-cafe-cream/80 px-3 py-3 text-center text-xs font-semibold text-cafe-brown">
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const featuredLabs = labs.slice(0, 3)
  const featuredProjects = securityProjects.slice(0, 3)

  return (
    <div className="w-full overflow-hidden">
      <section className="px-6 pb-14 pt-16 md:px-12 lg:px-20 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="anim-fade-right">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cafe-terracota">{t('greeting')}</p>
            <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-cafe-dark md:text-6xl">
              {t('role')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cafe-muted">{t('bio')}</p>
            <p className="mt-5 text-sm text-cafe-brown">
              Kissimmee, Florida · Open to Cybersecurity Internship / Junior SOC / IT Security roles
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`/${locale}/labs`} className="rounded-lg bg-cafe-brown px-6 py-3 text-sm font-semibold text-cafe-cream transition-colors hover:bg-cafe-brown-light">
                {t('cta')}
              </Link>
              <a href="/Resume.pdf" className="rounded-lg border border-cafe-brown/35 px-6 py-3 text-sm font-semibold text-cafe-brown transition-colors hover:border-cafe-brown">
                Download Resume
              </a>
              <a href="https://github.com/TI0J0A0" target="_blank" rel="noreferrer" className="rounded-lg border border-cafe-muted/30 px-6 py-3 text-sm font-semibold text-cafe-dark transition-colors hover:border-cafe-brown hover:text-cafe-brown">
                GitHub
              </a>
            </div>
          </div>
          <div className="anim-fade-left">
            <CyberVisual />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-screen-xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="About" title="Builder mindset. Defender direction." />
          <div className="rounded-xl border border-cafe-brown/15 bg-white/5 p-7 text-base leading-8 text-cafe-muted">
            <p>
              I am currently developing my path into cybersecurity while using my background in backend and frontend development as a technical advantage.
            </p>
            <p className="mt-4">
              My experience with Java, Spring Boot, React, REST APIs, databases, and authentication helps me understand how applications are built, how systems communicate, and how security issues can appear in real environments.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            eyebrow="Cybersecurity Focus"
            title="SOC fundamentals, Blue Team operations, secure systems."
            text="My current cybersecurity focus includes network security, log analysis, Linux, Windows security basics, OWASP Top 10, secure backend development, and cloud security fundamentals."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {['SOC Analysis', 'Secure Backend', 'Network Security'].map((item) => (
              <div key={item} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
                <h3 className="font-serif text-xl font-semibold text-cafe-dark">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-cafe-muted">
                  Practical study focused on investigation, documentation, secure design, and understanding how systems behave.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Featured Labs"
              title="Hands-on security practice"
              text="Labs where I practice investigation, traffic analysis, log review, vulnerability identification, and technical documentation."
            />
            <Link href={`/${locale}/labs`} className="mb-8 text-sm font-semibold text-cafe-brown hover:text-cafe-brown-light">
              View all labs -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredLabs.map((lab) => (
              <article key={lab.title} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cafe-terracota">Lab</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-cafe-dark">{lab.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cafe-muted">{lab.objective}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {lab.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-brown">{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Featured Projects"
              title="Security-focused development projects"
              text="Projects combining backend development, authentication, API security, dashboards, and defensive security workflows."
            />
            <Link href={`/${locale}/projects`} className="mb-8 text-sm font-semibold text-cafe-brown hover:text-cafe-brown-light">
              View all projects -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cafe-moss">{project.category}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-cafe-dark">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cafe-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-brown">{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle eyebrow="Technical Skills" title="Organized around security, systems, and development." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(securitySkills).map(([category, list]) => (
              <div key={category} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-5">
                <h3 className="text-sm font-semibold text-cafe-dark">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span key={skill} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-muted">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto rounded-xl border border-cafe-brown/15 bg-cafe-cream-dark p-8 max-w-screen-xl md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-cafe-dark">Open to cybersecurity opportunities.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-cafe-muted">
              I am open to cybersecurity internships, junior SOC roles, IT security opportunities, and backend security projects.
            </p>
          </div>
          <Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-lg bg-cafe-brown px-6 py-3 text-sm font-semibold text-cafe-cream md:mt-0">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}
