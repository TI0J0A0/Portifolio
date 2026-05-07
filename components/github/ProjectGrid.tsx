'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import type { GitHubRepo } from '@/lib/types'

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Java: '#B07219',
  'C#': '#178600',
  CSS: '#563D7C',
  HTML: '#E34C26',
  Shell: '#89E051',
}

function SkeletonCard() {
  return (
    <div className="bg-white/60 border border-cafe-brown/10 rounded-[var(--radius-card)] p-5 animate-pulse">
      <div className="h-4 bg-cafe-brown/10 rounded w-3/4 mb-3" />
      <div className="h-3 bg-cafe-brown/10 rounded w-full mb-1" />
      <div className="h-3 bg-cafe-brown/10 rounded w-2/3" />
    </div>
  )
}

export default function ProjectGrid() {
  const t = useTranslations('projects')
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then((data) => {
        setRepos(data)
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [])

  if (status === 'loading') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (status === 'error') {
    return <p className="text-cafe-muted text-sm">{t('error')}</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo, i) => (
        <motion.a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white/60 border border-cafe-brown/10 rounded-[var(--radius-card)] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-cafe-brown font-semibold text-sm group-hover:text-cafe-terracota transition-colors">
              {repo.name}
            </h3>
            <span className="text-cafe-muted text-xs shrink-0">
              ★ {repo.stargazers_count}
            </span>
          </div>
          {repo.description && (
            <p className="mt-1.5 text-xs text-cafe-dark/60 leading-relaxed line-clamp-2">
              {repo.description}
            </p>
          )}
          {repo.language && (
            <div className="mt-3 flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#ccc' }}
              />
              <span className="text-xs text-cafe-muted">{repo.language}</span>
            </div>
          )}
        </motion.a>
      ))}
    </div>
  )
}
