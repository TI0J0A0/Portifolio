export default function ContactPage() {
  const contactItems = [
    ['Email', 'joaopedro.dev@gmail.com', 'mailto:joaopedro.dev@gmail.com'],
    ['GitHub', 'github.com/TI0J0A0', 'https://github.com/TI0J0A0'],
    ['LinkedIn', 'LinkedIn profile', 'https://www.linkedin.com'],
    ['Location', 'Kissimmee, Florida', null],
  ] as const

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-screen-md">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cafe-terracota">Contact</p>
        <h1 className="font-serif text-4xl font-semibold text-cafe-brown md:text-6xl">Contact</h1>
        <p className="mt-6 text-lg leading-8 text-cafe-muted">
          I am open to cybersecurity internships, junior SOC roles, IT security opportunities, backend security projects, and technical collaboration.
        </p>
        <p className="mt-4 text-base leading-7 text-cafe-muted">
          Feel free to reach out for cybersecurity opportunities, junior security roles, internships, backend security projects, or technical collaboration.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4">
          {contactItems.map(([label, value, href]) => (
            <div key={label} className="rounded-xl border border-cafe-brown/15 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cafe-terracota">{label}</p>
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="mt-2 block text-lg font-semibold text-cafe-brown hover:text-cafe-brown-light">
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-semibold text-cafe-dark">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
