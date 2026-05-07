import { useTranslations } from 'next-intl'
import ProjectGrid from '@/components/github/ProjectGrid'

export default function ProjectsPage() {
  const t = useTranslations('projects')

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-serif text-cafe-brown text-3xl md:text-5xl font-semibold mb-12 anim-fade-up">
          {t('title')}
        </h1>
        <ProjectGrid />
      </div>
    </section>
  )
}
