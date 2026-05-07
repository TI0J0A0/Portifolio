'use client'

import { useTranslations } from 'next-intl'
import type { Experience, Education } from '@/lib/types'

/* ─── Icons ──────────────────────────────────────────────────── */
function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  )
}

function GraduationIcon({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

/* ─── Types ──────────────────────────────────────────────────── */
type WorkEntry = { type: 'work'; sortDate: string; data: Experience }
type EduEntry  = { type: 'education'; sortDate: string; data: Education }
type Entry = WorkEntry | EduEntry

function parseDate(s: string) {
  const [y, m = '01'] = s.split('-')
  return Number(y) * 100 + Number(m)
}

function fmtDate(dateStr: string) {
  const [year, month] = dateStr.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('pt-BR', {
    month: 'short', year: 'numeric',
  })
}

/* ─── Card ───────────────────────────────────────────────────── */
function TimelineCard({ entry, index, side }: { entry: Entry; index: number; side: 'left' | 'right' }) {
  const t      = useTranslations('career')
  const isWork = entry.type === 'work'

  const dotBg    = isWork ? 'bg-cafe-terracota' : 'bg-cafe-moss'
  const badgeCls = isWork
    ? 'bg-cafe-moss/10 text-cafe-moss border-cafe-moss/20'
    : 'bg-cafe-terracota/10 text-cafe-terracota border-cafe-terracota/20'

  const startFmt = fmtDate(entry.sortDate)
  const endFmt   = isWork
    ? (entry.data.endDate ? fmtDate(entry.data.endDate) : t('present'))
    : fmtDate((entry.data as Education).endDate)

  const animClass = side === 'right' ? 'anim-fade-left' : 'anim-fade-right'
  const delay     = `${index * 0.09}s`

  return (
    <div className="relative flex">
      {/* Icon dot on the line */}
      <div className={`
        absolute left-[0.875rem] md:left-1/2 z-10 mt-1
        w-8 h-8 -translate-x-1/2 rounded-full ${dotBg}
        flex items-center justify-center text-white shadow-md
      `}>
        {isWork ? <BriefcaseIcon /> : <GraduationIcon />}
      </div>

      {/* Card */}
      <div
        className={`
          ${animClass}
          ml-12 w-full
          md:ml-0 md:w-[calc(50%-2.5rem)]
          ${side === 'right' ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}
        `}
        style={{ animationDelay: delay }}
      >
        <div className="bg-white/70 border border-cafe-brown/10 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-xs text-cafe-muted mb-1.5 font-mono">
            {startFmt} → {endFmt}
          </div>

          {isWork ? (
            <>
              <h3 className="font-serif text-cafe-brown font-semibold text-base leading-snug">
                {entry.data.role}
              </h3>
              <p className="text-cafe-dark/70 text-sm font-medium mt-0.5">
                {entry.data.company}
                {entry.data.location && (
                  <span className="text-cafe-muted font-normal"> · {entry.data.location}</span>
                )}
              </p>
              <p className="mt-2 text-sm text-cafe-dark/60 leading-relaxed">
                {entry.data.description}
              </p>
              <div className={`mt-3 flex flex-wrap gap-1.5 ${side === 'left' ? 'md:justify-end' : ''}`}>
                {entry.data.stack.map((tech) => (
                  <span key={tech} className={`px-2 py-0.5 text-xs rounded-full border ${badgeCls}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={`flex items-center gap-2 ${side === 'left' ? 'md:justify-end' : ''}`}>
                <GraduationIcon size="md" />
                <h3 className="font-serif text-cafe-brown font-semibold text-base leading-snug">
                  {(entry.data as Education).school}
                </h3>
              </div>
              <p className="text-cafe-dark/70 text-sm mt-1">
                {(entry.data as Education).degree}
              </p>
              <p className="text-cafe-muted text-xs mt-0.5">
                {(entry.data as Education).field}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Main ───────────────────────────────────────────────────── */
export default function CareerTimeline({ experience, education }: {
  experience: Experience[]
  education: Education[]
}) {
  const entries: Entry[] = [
    ...experience.map((e): WorkEntry => ({ type: 'work',      sortDate: e.startDate, data: e })),
    ...education.map((e): EduEntry  => ({ type: 'education', sortDate: e.startDate, data: e })),
  ].sort((a, b) => parseDate(b.sortDate) - parseDate(a.sortDate))

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[0.875rem] md:left-1/2 top-0 bottom-0 w-px bg-cafe-brown/15" />

      <div className="flex flex-col gap-8">
        {entries.map((entry, i) => (
          <TimelineCard
            key={`${entry.type}-${i}`}
            entry={entry}
            index={i}
            side={i % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </div>
  )
}
