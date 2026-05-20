'use client'

import { useLocale, useTranslations } from 'next-intl'
import type { Experience, Education } from '@/lib/types'

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  )
}

function GraduationIcon({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

type WorkEntry = { type: 'work'; sortDate: string; data: Experience }
type EduEntry = { type: 'education'; sortDate: string; data: Education }
type Entry = WorkEntry | EduEntry

function parseDate(s: string) {
  const [y, m = '01'] = s.split('-')
  return Number(y) * 100 + Number(m)
}

function fmtDate(dateStr: string, locale: string) {
  const [year, month] = dateStr.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
}

function TimelineCard({ entry, index, side }: { entry: Entry; index: number; side: 'left' | 'right' }) {
  const t = useTranslations('career')
  const locale = useLocale()
  const isWork = entry.type === 'work'

  const dotBg = isWork ? 'bg-cafe-terracota' : 'bg-cafe-moss'
  const badgeCls = isWork
    ? 'bg-cafe-moss/10 text-cafe-moss border-cafe-moss/20'
    : 'bg-cafe-terracota/10 text-cafe-terracota border-cafe-terracota/20'

  const startFmt = fmtDate(entry.sortDate, locale)
  const endFmt = isWork
    ? (entry.data.endDate ? fmtDate(entry.data.endDate, locale) : t('present'))
    : fmtDate((entry.data as Education).endDate, locale)

  const animClass = side === 'right' ? 'anim-fade-left' : 'anim-fade-right'
  const delay = `${index * 0.09}s`

  return (
    <div className="relative flex">
      <div className={`absolute left-[0.875rem] z-10 mt-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full text-cafe-cream shadow-md md:left-1/2 ${dotBg}`}>
        {isWork ? <BriefcaseIcon /> : <GraduationIcon />}
      </div>

      <div
        className={`${animClass} ml-12 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${side === 'right' ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}
        style={{ animationDelay: delay }}
      >
        <div className="rounded-xl border border-cafe-brown/15 bg-white/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-1.5 text-xs text-cafe-muted">
            {startFmt} - {endFmt}
          </div>

          {isWork ? (
            <>
              <h3 className="font-serif text-base font-semibold leading-snug text-cafe-dark">
                {entry.data.role}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-cafe-dark/70">
                {entry.data.company}
                {entry.data.location && (
                  <span className="font-normal text-cafe-muted"> · {entry.data.location}</span>
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cafe-muted">
                {entry.data.description}
              </p>
              <div className={`mt-4 flex flex-wrap gap-1.5 ${side === 'left' ? 'md:justify-end' : ''}`}>
                {entry.data.stack.map((tech) => (
                  <span key={tech} className={`rounded-full border px-2 py-0.5 text-xs ${badgeCls}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={`flex items-center gap-2 ${side === 'left' ? 'md:justify-end' : ''}`}>
                <GraduationIcon size="md" />
                <h3 className="font-serif text-base font-semibold leading-snug text-cafe-dark">
                  {(entry.data as Education).school}
                </h3>
              </div>
              <p className="mt-1 text-sm text-cafe-dark/70">
                {(entry.data as Education).degree}
              </p>
              <p className="mt-0.5 text-xs text-cafe-muted">
                {(entry.data as Education).field}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CareerTimeline({ experience, education }: {
  experience: Experience[]
  education: Education[]
}) {
  const entries: Entry[] = [
    ...experience.map((e): WorkEntry => ({ type: 'work', sortDate: e.startDate, data: e })),
    ...education.map((e): EduEntry => ({ type: 'education', sortDate: e.startDate, data: e })),
  ].sort((a, b) => parseDate(b.sortDate) - parseDate(a.sortDate))

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[0.875rem] top-0 w-px bg-cafe-brown/15 md:left-1/2" />
      <div className="flex flex-col gap-8">
        {entries.map((entry, i) => (
          <TimelineCard key={`${entry.type}-${i}`} entry={entry} index={i} side={i % 2 === 0 ? 'right' : 'left'} />
        ))}
      </div>
    </div>
  )
}
