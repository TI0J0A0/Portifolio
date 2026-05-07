'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { routing } from '@/i18n/routing'

const labels: Record<string, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
}

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(next: string) {
    const segments = pathname.split('/')
    segments[1] = next
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${
            locale === loc
              ? 'bg-cafe-brown text-cafe-cream'
              : 'text-cafe-muted hover:text-cafe-brown'
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  )
}
