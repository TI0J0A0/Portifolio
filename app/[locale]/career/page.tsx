import { useTranslations } from 'next-intl'
import { experience } from '@/lib/data/experience'
import { education } from '@/lib/data/education'
import CareerTimeline from '@/components/career/CareerTimeline'

export default function CareerPage() {
  const t = useTranslations('career')

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-serif text-cafe-brown text-3xl md:text-5xl font-semibold mb-3 anim-fade-up">
          {t('title')}
        </h1>
        <p className="mb-8 max-w-3xl text-base leading-7 text-cafe-muted anim-fade-up" style={{ animationDelay: '0.05s' }}>
          My professional experience has helped me develop technical communication, troubleshooting, customer support, problem-solving, and the ability to explain technical concepts clearly to different audiences.
        </p>
        <p className="text-sm text-cafe-muted mb-14 flex items-center gap-6 anim-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cafe-terracota inline-block" />
            {t('work')}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cafe-moss inline-block" />
            {t('education')}
          </span>
        </p>
        <CareerTimeline experience={experience} education={education} />
      </div>
    </section>
  )
}
