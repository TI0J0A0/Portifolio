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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onClick={() => setSelected(cert)} />
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="relative aspect-[4/3] w-full bg-cafe-cream-dark">
              <Image
                src={selected.imageUrl}
                alt={selected.title}
                fill
                className="object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] text-cafe-muted">
                Certificate
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-serif text-xl font-semibold text-cafe-dark">
                {selected.title}
              </h2>
              <div className="mt-3 space-y-1 text-sm text-cafe-muted">
                <p>
                  <span className="text-cafe-dark">{t('issued')}: </span>
                  {selected.issuer}
                </p>
                <p>
                  <span className="text-cafe-dark">{t('date')}: </span>
                  {selected.date}
                </p>
              </div>
              {selected.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-brown">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              {selected.validationUrl && (
                <a
                  href={selected.validationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cafe-brown px-4 py-2 text-sm text-cafe-cream transition-colors hover:bg-cafe-brown-light"
                >
                  {t('validate')} -&gt;
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
