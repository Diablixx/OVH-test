import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OVH POST Test',
  description: 'Testing POST requests to OVH API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
