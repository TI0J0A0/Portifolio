import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Lora } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfólio profissional Full-Stack Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geistSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
