import type { GitHubRepo } from '@/lib/types'
import { getTranslations } from 'next-intl/server'

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

async function getRepos(): Promise<GitHubRepo[]> {
  const username = process.env.GITHUB_USERNAME
  if (!username) return []

  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
      { headers }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.map((r: Record<string, unknown>) => ({
      name: String(r.name),
      description: (r.description as string) ?? null,
      language: (r.language as string) ?? null,
      html_url: String(r.html_url),
      stargazers_count: (r.stargazers_count as number) ?? 0,
      topics: (r.topics as string[]) ?? [],
    }))
  } catch {
    return []
  }
}

export function ProjectGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white/60 border border-cafe-brown/10 rounded-[var(--radius-card)] p-5 animate-pulse">
          <div className="h-4 bg-cafe-brown/10 rounded w-3/4 mb-3" />
          <div className="h-3 bg-cafe-brown/10 rounded w-full mb-1" />
          <div className="h-3 bg-cafe-brown/10 rounded w-2/3" />
        </div>
      ))}
    </div>
  )
}

export default async function ProjectGrid() {
  const t = await getTranslations('projects')
  const repos = await getRepos()

  if (repos.length === 0) {
    return <p className="text-cafe-muted text-sm">{t('error')}</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo, i) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white/60 border border-cafe-brown/10 rounded-[var(--radius-card)] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 anim-fade-up"
          style={{ animationDelay: `${i * 60}ms` }}
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
        </a>
      ))}
    </div>
  )
}
