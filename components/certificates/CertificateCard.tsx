'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Certificate } from '@/lib/types'

interface Props {
  cert: Certificate
  onClick: () => void
}

export default function CertificateCard({ cert, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full overflow-hidden rounded-xl border border-cafe-brown/15 bg-white/5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cafe-brown/40"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.015 }}
    >
      <div className="relative aspect-[4/3] w-full bg-cafe-cream-dark">
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          fill
          className="object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="absolute inset-0 flex select-none items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] text-cafe-muted">
          Certificate
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-sm font-semibold leading-snug text-cafe-dark">
          {cert.title}
        </h3>
        <p className="mt-1 text-xs text-cafe-muted">{cert.issuer}</p>
        {cert.status && (
          <p className="mt-3 inline-flex rounded-full bg-cafe-cream-dark px-2.5 py-1 text-xs text-cafe-brown">
            {cert.status}
          </p>
        )}
      </div>
    </motion.button>
  )
}
