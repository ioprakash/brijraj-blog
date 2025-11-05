import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Brijraj Kushwaha - Digital Creator, Journalist & Advocate',
  description: 'Personal blog and portfolio of Brijraj Kushwaha - Digital Creator, Correspondent at Ujjyaalo, Vice President of National Federation of Right to Information, and advocate for press freedom in Nepal. 5.7K+ followers.',
  keywords: ['Brijraj Kushwaha', 'blog', 'digital creator', 'correspondent', 'Ujjyaalo', 'Nepal journalism', 'right to information', 'press freedom', 'Brij Krishi Farm', 'Nepal Press Union', 'Gandak River'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
