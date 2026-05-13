import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { skills } from '@/lib/data/skills'

const values = [
  {
    title: 'Clean Code',
    text: 'Writing maintainable and testable code with best practices.',
    icon: 'leaf',
    color: 'bg-cafe-moss',
  },
  {
    title: 'Secure by Design',
    text: 'Security integrated in every layer of the application.',
    icon: 'shield',
    color: 'bg-cafe-terracota',
  },
  {
    title: 'Scalable Solutions',
    text: 'Building applications that grow with business needs.',
    icon: 'puzzle',
    color: 'bg-cafe-moss',
  },
  {
    title: 'Always Learning',
    text: 'Continuous learning and improvement drive everything.',
    icon: 'cup',
    color: 'bg-cafe-brown',
  },
]

const featuredProjects = [
  {
    name: 'E-Commerce API',
    description: 'RESTful API for an e-commerce platform with authentication, payments and order management.',
    icon: 'cart',
    color: 'bg-cafe-brown',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    name: 'Analytics Service',
    description: 'Microservice responsible for collecting and processing business metrics.',
    icon: 'chart',
    color: 'bg-cafe-moss',
    tags: ['Java', 'Spring Boot', 'Kafka'],
  },
  {
    name: 'Auth Service',
    description: 'Authentication and authorization microservice with JWT and role-based access control.',
    icon: 'shield',
    color: 'bg-cafe-terracota',
    tags: ['Java', 'Spring Security', 'MySQL'],
  },
]

function Icon({ name }: { name: string }) {
  const common = 'h-7 w-7'

  if (name === 'leaf') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 4c-8.5.6-14 5.8-14 12.5 0 1.1.4 2.1 1.1 2.8C14.2 19.1 19.4 13.2 20 4Z" />
        <path d="M4 20c3.2-5.1 7.1-8.3 12-10" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 19 6v5.2c0 4.4-2.8 8.3-7 9.8-4.2-1.5-7-5.4-7-9.8V6l7-3Z" />
        <path d="M12 8v5" />
        <path d="M12 16h.01" />
      </svg>
    )
  }

  if (name === 'puzzle') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 3h6v4h2.2a2.8 2.8 0 1 1 0 5H15v3h-4v2.2a2.8 2.8 0 1 1-5 0V15H3V9h4V6a3 3 0 0 1 2-3Z" />
      </svg>
    )
  }

  if (name === 'cup') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 8h10v5a5 5 0 0 1-10 0V8Z" />
        <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16" />
        <path d="M5 20h12" />
        <path d="M8 4v2M12 4v2M16 4v2" />
      </svg>
    )
  }

  if (name === 'cart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 6h16l-2 8H7L5 3H2" />
        <path d="M8 20h.01M18 20h.01" />
      </svg>
    )
  }

  if (name === 'chart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18h16" />
        <path d="m6 15 4-4 3 3 5-7" />
        <path d="M18 7h-4" />
        <path d="M18 7v4" />
      </svg>
    )
  }

  return null
}

function HeroIllustration() {
  return (
    <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]" aria-hidden="true">
      <div className="absolute right-0 top-8 h-72 w-72 rounded-full bg-cafe-cream-dark/70 lg:h-[430px] lg:w-[430px]" />

      <div className="absolute right-4 top-6 h-64 w-32 lg:right-0 lg:top-10 lg:h-80 lg:w-40">
        <div className="absolute bottom-0 left-11 h-24 w-20 rounded-b-2xl rounded-t-md bg-[#d5ad78]" />
        <div className="absolute bottom-20 left-20 h-36 w-2 origin-bottom -rotate-12 rounded-full bg-cafe-moss" />
        <div className="absolute bottom-20 left-11 h-32 w-2 origin-bottom rotate-12 rounded-full bg-cafe-moss" />
        <div className="absolute bottom-36 left-4 h-12 w-24 rotate-12 rounded-[60%_0_60%_0] bg-cafe-moss/90" />
        <div className="absolute bottom-44 left-20 h-16 w-28 -rotate-45 rounded-[60%_0_60%_0] bg-cafe-moss" />
        <div className="absolute bottom-28 left-24 h-10 w-24 rotate-12 rounded-[60%_0_60%_0] bg-cafe-moss/90" />
      </div>

      <div className="absolute bottom-0 right-0 h-28 w-[520px] max-w-[92%] rounded-tl-full bg-[#d9b98a]/65" />
      <div className="absolute bottom-14 right-10 h-32 w-72 rounded-lg border-[10px] border-cafe-brown bg-cafe-cream shadow-xl lg:right-20 lg:h-44 lg:w-96">
        <div className="space-y-3 p-5">
          <div className="h-2 w-20 rounded-full bg-cafe-terracota/75" />
          <div className="h-2 w-40 rounded-full bg-[#c6a273]" />
          <div className="h-2 w-28 rounded-full bg-cafe-brown/35" />
          <div className="h-2 w-48 rounded-full bg-[#c6a273]" />
          <div className="h-2 w-24 rounded-full bg-cafe-terracota/65" />
        </div>
      </div>
      <div className="absolute bottom-2 right-4 h-8 w-80 rounded-b-xl bg-cafe-brown/85 lg:right-12 lg:w-[430px]" />

      <div className="absolute bottom-8 left-14 h-16 w-32 -rotate-12 rounded-md bg-cafe-brown-light shadow-md lg:left-28">
        <div className="absolute left-3 top-0 h-full w-px bg-cafe-cream/30" />
        <div className="absolute -right-4 top-7 h-3 w-28 rotate-[18deg] rounded-full bg-cafe-brown" />
      </div>
      <div className="absolute bottom-20 left-5 h-16 w-16 rounded-b-2xl rounded-t-md bg-cafe-terracota shadow-md lg:left-16">
        <div className="absolute -right-4 top-4 h-7 w-5 rounded-r-full border-4 border-cafe-terracota" />
      </div>
      <div className="absolute bottom-38 left-11 h-20 w-px bg-cafe-muted/30 shadow-[14px_-18px_0_0_rgba(158,139,125,0.25),28px_-36px_0_0_rgba(158,139,125,0.2)]" />
    </div>
  )
}

export default function HomePage() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <div className="w-full overflow-hidden">
      <section className="px-6 pb-10 pt-16 md:px-12 lg:px-20 lg:pb-8 lg:pt-10">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 max-w-xl anim-fade-right">
            <p className="mb-4 text-base text-cafe-brown/75">{t('greeting')}</p>
            <h1 className="font-serif text-6xl font-semibold leading-none text-cafe-brown md:text-7xl">
              Joao Pedro
            </h1>
            <h2 className="mt-5 font-serif text-2xl italic leading-snug text-cafe-terracota md:text-3xl">
              {t('role')}
            </h2>
            <p className="mt-5 text-sm text-cafe-brown/70">
              <span className="font-semibold">Kissimmee, Florida</span>
              <span className="mx-2">-</span>
              <span>github.com/TI0J0A0</span>
            </p>
            <p className="mt-8 max-w-lg text-base leading-8 text-cafe-dark/85">
              {t('bio')}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/projects`}
                className="rounded-xl bg-cafe-brown px-8 py-4 text-sm font-semibold text-cafe-cream shadow-sm transition-colors hover:bg-cafe-brown-light"
              >
                {t('cta')} -&gt;
              </Link>
              <Link
                href={`/${locale}/career`}
                className="rounded-xl border border-cafe-brown/30 px-8 py-4 text-sm font-semibold text-cafe-brown transition-colors hover:border-cafe-brown"
              >
                Timeline
              </Link>
            </div>
          </div>
          <div className="anim-fade-left">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 overflow-hidden rounded-xl border border-cafe-brown/15 bg-white/35 shadow-sm md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="border-cafe-brown/15 p-8 md:border-r lg:p-10 [&:nth-child(2n)]:md:border-r-0 [&:nth-child(4n)]:lg:border-r-0"
            >
              <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${item.color} text-cafe-cream shadow-md`}>
                <Icon name={item.icon} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-cafe-brown">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cafe-dark/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-cafe-brown">Featured Projects</h2>
              <div className="mt-3 h-0.5 w-12 bg-cafe-terracota" />
            </div>
            <Link href={`/${locale}/projects`} className="text-sm font-medium text-cafe-terracota hover:text-cafe-brown">
              See all projects -&gt;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="rounded-xl border border-cafe-brown/15 bg-white/30 p-6 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${project.color} text-cafe-cream`}>
                    <Icon name={project.icon} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-cafe-brown">{project.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-cafe-dark/80">{project.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-cafe-cream-dark px-4 py-2 text-xs text-cafe-dark/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="font-serif text-2xl font-semibold text-cafe-brown">Tech Stack</h2>
          <div className="mt-3 h-0.5 w-12 bg-cafe-terracota" />

          <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-3">
            {Object.entries(skills).map(([category, list], index) => (
              <div key={category} className="border-cafe-brown/15 md:border-r md:pr-8 last:border-r-0">
                <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold capitalize text-cafe-dark">
                  <span className="h-2 w-2 rounded-full bg-cafe-brown" />
                  {category === 'tools' ? 'Tools & DevOps' : category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {list.map((skill: string) => (
                    <span
                      key={`${index}-${skill}`}
                      className="rounded-full border border-cafe-brown/10 bg-cafe-cream-dark px-4 py-2 text-sm text-cafe-dark/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-screen-xl gap-8 rounded-xl border border-cafe-brown/15 bg-white/30 p-8 md:grid-cols-[1.1fr_0.9fr_1fr] md:items-center lg:p-10">
          <div className="flex items-center gap-6">
            <div className="hidden h-24 w-16 text-cafe-moss md:block">
              <Icon name="leaf" />
            </div>
            <h2 className="font-serif text-3xl font-semibold leading-snug text-cafe-brown">
              Let&apos;s build something amazing together.
            </h2>
          </div>
          <div className="border-cafe-brown/15 md:border-l md:pl-8">
            <p className="text-sm leading-6 text-cafe-dark/75">
              I&apos;m open to new opportunities and excited to bring ideas to life.
            </p>
            <a
              href="mailto:joaopedro.dev@gmail.com"
              className="mt-5 inline-flex rounded-lg bg-cafe-brown px-5 py-3 text-sm font-semibold text-cafe-cream transition-colors hover:bg-cafe-brown-light"
            >
              Get in touch -&gt;
            </a>
          </div>
          <div className="space-y-4 border-cafe-brown/15 text-sm text-cafe-dark/75 md:border-l md:pl-8">
            <p>joaopedro.dev@gmail.com</p>
            <p>github.com/TI0J0A0</p>
            <p>Kissimmee, Florida, USA</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-cafe-brown/10 bg-cafe-cream-dark/40 px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 text-sm text-cafe-brown/70 md:flex-row md:items-center md:justify-between">
          <span className="font-serif text-2xl text-cafe-brown">Portfolio</span>
          <p>© 2024 Joao Pedro. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cafe-brown">
              LinkedIn
            </a>
            <a href="https://github.com/TI0J0A0" target="_blank" rel="noreferrer" className="hover:text-cafe-brown">
              GitHub
            </a>
            <a href="/resume.pdf" className="hover:text-cafe-brown">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
