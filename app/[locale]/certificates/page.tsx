import { useTranslations } from 'next-intl'
import { certificates } from '@/lib/data/certificates'
import CertificateCarousel from '@/components/certificates/CertificateCarousel'

export default function CertificatesPage() {
  const t = useTranslations('certificates')

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-serif text-cafe-brown text-3xl md:text-5xl font-semibold mb-12 anim-fade-up">
          {t('title')}
        </h1>
        <p className="mb-10 max-w-3xl text-base leading-7 text-cafe-muted">
          A collection of certifications, courses, and professional training related to cybersecurity, cloud, software development, and technical foundations.
        </p>
        <CertificateCarousel items={certificates} />
      </div>
    </section>
  )
}
