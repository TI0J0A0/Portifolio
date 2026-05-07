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
      className="text-left w-full bg-white/60 border border-cafe-brown/10 rounded-[var(--radius-card)] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.015 }}
    >
      <div className="relative w-full aspect-[4/3] bg-cafe-cream-dark">
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          fill
          className="object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-cafe-muted text-4xl select-none">
          🏅
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-cafe-brown font-semibold text-sm leading-snug">
          {cert.title}
        </h3>
        <p className="mt-0.5 text-xs text-cafe-muted">{cert.issuer}</p>
      </div>
    </motion.button>
  )
}
