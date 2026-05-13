import { NextResponse } from 'next/server'

export async function GET() {
  const username = process.env.GITHUB_USERNAME
  if (!username) {
    return NextResponse.json({ error: 'GITHUB_USERNAME not set' }, { status: 500 })
  }

  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
      { headers, next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      return NextResponse.json({ error: 'GitHub API error' }, { status: res.status })
    }

    const data = await res.json()
    const repos = data.map((r: Record<string, unknown>) => ({
      name: r.name,
      description: r.description ?? null,
      language: r.language ?? null,
      html_url: r.html_url,
      stargazers_count: r.stargazers_count ?? 0,
      topics: r.topics ?? [],
    }))

    return NextResponse.json(repos)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 503 })
  }
}
