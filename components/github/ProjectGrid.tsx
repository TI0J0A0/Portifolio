import type { GitHubRepo } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import { securityProjects } from '@/lib/data/securityProjects'

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
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
      { headers, next: { revalidate: 3600 } }
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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6 animate-pulse">
          <div className="mb-3 h-4 w-3/4 rounded bg-cafe-brown/10" />
          <div className="mb-1 h-3 w-full rounded bg-cafe-brown/10" />
          <div className="h-3 w-2/3 rounded bg-cafe-brown/10" />
        </div>
      ))}
    </div>
  )
}

function LocalProjects() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {securityProjects.map((project) => (
        <article key={project.title} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cafe-terracota">{project.category}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-cafe-dark">{project.title}</h3>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-cafe-brown hover:text-cafe-brown-light">
              GitHub -&gt;
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-cafe-muted">{project.description}</p>
          <div className="mt-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-dark/80">Security concepts</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.securityConcepts.map((concept) => (
                <span key={concept} className="rounded-full bg-cafe-cream-dark px-3 py-1 text-xs text-cafe-brown">{concept}</span>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-dark/80">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-cafe-brown/15 px-3 py-1 text-xs text-cafe-muted">{tech}</span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-cafe-muted">{project.learned}</p>
        </article>
      ))}
    </div>
  )
}

export default async function ProjectGrid() {
  const t = await getTranslations('projects')
  const repos = await getRepos()

  if (repos.length === 0) {
    return (
      <div>
        <p className="mb-5 rounded-lg border border-cafe-brown/15 bg-cafe-cream-dark px-4 py-3 text-sm text-cafe-muted">
          {t('error')}
        </p>
        <LocalProjects />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <LocalProjects />
      <div>
        <h2 className="mb-5 font-serif text-2xl font-semibold text-cafe-dark">Recent GitHub Repositories</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {repos.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-cafe-brown/15 bg-white/5 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cafe-brown/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-base font-semibold text-cafe-dark transition-colors group-hover:text-cafe-brown">
                  {repo.name}
                </h3>
                <span className="shrink-0 text-xs text-cafe-muted">star {repo.stargazers_count}</span>
              </div>
              {repo.description && (
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-cafe-muted">{repo.description}</p>
              )}
              {repo.language && (
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#ccc' }} />
                  <span className="text-xs text-cafe-muted">{repo.language}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
