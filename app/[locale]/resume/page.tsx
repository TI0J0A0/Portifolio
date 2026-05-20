import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function ResumePage() {
  const locale = useLocale()

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-md rounded-xl border border-cafe-brown/15 bg-white/5 p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cafe-terracota">Resume</p>
        <h1 className="font-serif text-4xl font-semibold text-cafe-brown md:text-5xl">Resume</h1>
        <h2 className="mt-5 text-xl font-semibold text-cafe-dark">
          Cybersecurity Student | Secure Backend Development | Blue Team Focus
        </h2>
        <p className="mt-5 text-base leading-7 text-cafe-muted">
          I am currently preparing for entry-level cybersecurity opportunities, with a focus on SOC analysis, Blue Team fundamentals, secure systems, and backend security.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/Resume.pdf" className="rounded-lg bg-cafe-brown px-6 py-3 text-sm font-semibold text-cafe-cream transition-colors hover:bg-cafe-brown-light">
            Download Resume PDF
          </a>
          <a href="https://github.com/TI0J0A0" target="_blank" rel="noreferrer" className="rounded-lg border border-cafe-brown/35 px-6 py-3 text-sm font-semibold text-cafe-brown">
            View GitHub
          </a>
          <Link href={`/${locale}/contact`} className="rounded-lg border border-cafe-muted/30 px-6 py-3 text-sm font-semibold text-cafe-dark hover:text-cafe-brown">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
