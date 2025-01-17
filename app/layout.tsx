import './globals.css'
import { Noto_Sans_Bengali, Atma, Galada, Hind_Siliguri } from 'next/font/google'
import { Header } from '@/components/Header'
import { SettingsProvider } from '@/contexts/SettingsContext'
import { SettingsModal } from '@/components/SettingsModal'
import type { ReactNode } from 'react';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
})

const atma = Atma({
  subsets: ['bengali'],
  weight: ['400', '700'],
  variable: '--font-atma',
})

const galada = Galada({
  subsets: ['bengali'],
  weight: '400',
  variable: '--font-galada',
})

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '700'],
  variable: '--font-hind-siliguri',
})

export const metadata = {
  title: 'Omayer B',
  description: 'অনন্তকালের পথে',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Musafir-Agontuk-KK0crjOc0TVArX8ze2hUofVe4y7kG9.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${atma.variable} ${galada.variable} ${hindSiliguri.variable}`}>
      <SettingsProvider>
        <body className="bg-gray-50 dark:bg-gray-900">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <SettingsModal />
        </body>
      </SettingsProvider>
    </html>
  )
}
