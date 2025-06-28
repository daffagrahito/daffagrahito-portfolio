import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daffa Grahito - Portfolio',
  description: 'Personal portfolio of Daffa Grahito',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
