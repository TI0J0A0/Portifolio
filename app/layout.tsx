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
  title: 'Joao Aguiar | Cybersecurity Student & Secure Backend Developer',
  description: 'Computer Engineering student focused on cybersecurity, SOC analysis, Blue Team fundamentals, secure backend development, and cloud security basics.',
  keywords: [
    'Cybersecurity Student',
    'Junior SOC Analyst',
    'Blue Team',
    'Secure Backend Development',
    'Java Spring Boot Security',
    'SOC Analyst Portfolio',
    'Cybersecurity Portfolio',
    'Florida Cybersecurity Student',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geistSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
