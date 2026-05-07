import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { skills } from '@/lib/data/skills'
import { education } from '@/lib/data/education'

export default function HomePage() {
  const t      = useTranslations('hero')
  const locale = useLocale()

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-cafe-muted text-sm font-mono mb-2 anim-fade-up">{t('greeting')}</p>
          <h1 className="font-serif text-cafe-brown text-5xl md:text-7xl font-semibold leading-tight anim-fade-up" style={{ animationDelay: '0.07s' }}>
            João Pedro
          </h1>
          <h2 className="font-serif text-cafe-terracota text-xl md:text-3xl mt-3 italic anim-fade-up" style={{ animationDelay: '0.14s' }}>
            {t('role')}
          </h2>
          <p className="mt-1.5 text-cafe-muted text-sm anim-fade-up" style={{ animationDelay: '0.18s' }}>
            Kissimmee, Florida · github.com/TI0J0A0
          </p>
          <p className="mt-7 text-cafe-dark/70 max-w-2xl leading-relaxed text-lg anim-fade-up" style={{ animationDelay: '0.22s' }}>
            {t('bio')}
          </p>
          <div className="mt-9 flex flex-wrap gap-4 anim-fade-up" style={{ animationDelay: '0.28s' }}>
            <Link
              href={`/${locale}/projects`}
              className="px-6 py-3 bg-cafe-brown text-cafe-cream text-sm rounded-xl hover:bg-cafe-brown-light transition-colors"
            >
              {t('cta')} →
            </Link>
            <Link
              href={`/${locale}/career`}
              className="px-6 py-3 border border-cafe-brown/30 text-cafe-brown text-sm rounded-xl hover:border-cafe-brown transition-colors"
            >
              Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-cafe-brown/8 mx-auto" />

      {/* Skills */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xs font-mono text-cafe-muted uppercase tracking-widest mb-8 anim-fade-up">
            Stack técnica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, list], ci) => (
              <div key={category} className="anim-fade-up" style={{ animationDelay: `${ci * 0.1}s` }}>
                <h3 className="text-xs font-mono text-cafe-muted uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-cafe-cream-dark text-cafe-brown rounded-full border border-cafe-brown/10"
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

      {/* Divider */}
      <div className="w-full h-px bg-cafe-brown/8" />

      {/* Education */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-xs font-mono text-cafe-muted uppercase tracking-widest mb-8 anim-fade-up">
            Formação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <div
                key={edu.school}
                className="flex items-start gap-4 bg-white/50 border border-cafe-brown/10 rounded-xl px-5 py-4 anim-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-1 self-stretch rounded-full bg-cafe-terracota/40 shrink-0" />
                <div>
                  <p className="font-serif text-cafe-brown text-base font-semibold">{edu.school}</p>
                  <p className="text-sm text-cafe-dark/60">{edu.degree} · {edu.field}</p>
                  <p className="text-xs text-cafe-muted mt-0.5">
                    {edu.startDate.slice(0, 4)} – {edu.endDate.slice(0, 4)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
