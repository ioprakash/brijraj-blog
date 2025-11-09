import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CMS Dashboard - Brijraj Kushwaha',
  description: 'Content Management System for blog posts',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
