export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string | null
  stack: string[]
  description: string
  location?: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl: string
  validationUrl?: string
}

export interface Skills {
  frontend: string[]
  backend: string[]
  tools: string[]
}

export interface Education {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface GitHubRepo {
  name: string
  description: string | null
  language: string | null
  html_url: string
  stargazers_count: number
  topics: string[]
}
