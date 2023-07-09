import { Inter } from 'next/font/google'
import '@styles/global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Book Shop',
  description: 'Book Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
