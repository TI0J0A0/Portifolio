'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/career`, label: t('career') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/certificates`, label: t('certificates') },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-40 h-16 bg-cafe-cream/80 backdrop-blur-md border-b border-cafe-brown/10">
      <div className="max-w-screen-xl mx-auto w-full h-full px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-serif text-cafe-brown font-semibold tracking-tight text-lg"
        >
          Portfolio
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cafe-dark/70 hover:text-cafe-brown transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LocaleSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-cafe-brown transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-cafe-brown transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-cafe-brown transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-16 inset-x-0 bg-cafe-cream border-b border-cafe-brown/10 px-6 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-3 pt-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-cafe-dark/70 hover:text-cafe-brown transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-1">
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
