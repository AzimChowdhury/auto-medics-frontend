
import Providers from '@/lib/providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auto-Medics',
  description: 'The best car clinic nationwide',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>

          {children}
        </body>
      </html>
    </Providers>
  )
}
