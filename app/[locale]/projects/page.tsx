import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import ProjectGrid, { ProjectGridSkeleton } from '@/components/github/ProjectGrid'

export default function ProjectsPage() {
  const t = useTranslations('projects')

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-serif text-cafe-brown text-3xl md:text-5xl font-semibold mb-12 anim-fade-up">
          {t('title')}
        </h1>
        <p className="mb-10 max-w-3xl text-base leading-7 text-cafe-muted">
          These projects combine my development background with my cybersecurity learning path. My goal is to build secure systems, understand application risks, and document how security concepts apply to real software.
        </p>
        <Suspense fallback={<ProjectGridSkeleton />}>
          <ProjectGrid />
        </Suspense>
      </div>
    </section>
  )
}
