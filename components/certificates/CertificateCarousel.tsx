'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import type { Certificate } from '@/lib/types'
import CertificateCard from './CertificateCard'
import Modal from '@/components/ui/Modal'

interface Props {
  items: Certificate[]
}

export default function CertificateCarousel({ items }: Props) {
  const t = useTranslations('certificates')
  const [selected, setSelected] = useState<Certificate | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onClick={() => setSelected(cert)} />
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="relative w-full aspect-[4/3] bg-cafe-cream-dark">
              <Image
                src={selected.imageUrl}
                alt={selected.title}
                fill
                className="object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-7xl select-none pointer-events-none">
                🏅
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-serif text-cafe-brown text-xl font-semibold">
                {selected.title}
              </h2>
              <div className="mt-2 space-y-1 text-sm text-cafe-dark/70">
                <p>
                  <span className="text-cafe-muted">{t('issued')}: </span>
                  {selected.issuer}
                </p>
                <p>
                  <span className="text-cafe-muted">{t('date')}: </span>
                  {selected.date}
                </p>
              </div>
              <a
                href={selected.validationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-cafe-brown text-cafe-cream text-sm rounded-[var(--radius-card)] hover:bg-cafe-brown-light transition-colors"
              >
                {t('validate')} ↗
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
